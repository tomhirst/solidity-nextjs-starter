"use client";

import { useEffect, useState } from "react";
import {
  useAccount,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import abi from "../abi/greeter.json";

const useGreeting = ({
  newGreeting,
  onSetGreetingSuccess,
}: {
  newGreeting?: string;
  onSetGreetingSuccess?: () => void;
}): {
  address: `0x${string}` | undefined;
  greeting: string | null;
  getGreetingLoading: boolean;
  getGreetingError: boolean;
  setGreeting: (() => void) | undefined;
  setGreetingLoading: boolean;
  prepareSetGreetingError: boolean;
  setGreetingError: boolean;
} => {
  // This pattern prevents Next.js server side hydration mismatch errors
  const [state, setState] = useState<{
    address: `0x${string}` | undefined;
    greeting: string | null;
    getGreetingLoading: boolean;
    getGreetingError: boolean;
    setGreeting: (() => void) | undefined;
    setGreetingLoading: boolean;
    prepareSetGreetingError: boolean;
    setGreetingError: boolean;
  }>({
    address: undefined,
    greeting: ``,
    getGreetingLoading: true,
    getGreetingError: false,
    setGreeting: undefined,
    setGreetingLoading: false,
    prepareSetGreetingError: false,
    setGreetingError: false,
  });

  const { address } = useAccount();

  // Otherwise we'd just return these values directly
  const {
    data: greeting,
    isLoading: getGreetingLoading,
    isError: getGreetingError,
  } = useContractRead({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID ?? "31337"),
    abi,
    functionName: "getGreeting",
    watch: true,
  }) as { data: string | null; isLoading: boolean; isError: boolean };

  const { config, isError: prepareSetGreetingError } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID ?? "31337"),
    abi,
    functionName: "setGreeting",
    args: [newGreeting],
  });

  const {
    data,
    write: setGreeting,
    isLoading: setGreetingLoading,
    isError: setGreetingError,
  } = useContractWrite(config);

  const { isLoading: txLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      if (onSetGreetingSuccess) {
        onSetGreetingSuccess();
      }
    },
  });

  // Setting state in useEffect ensures that the state is only updated on the client side
  useEffect(() => {
    setState({
      address,
      greeting,
      getGreetingLoading,
      getGreetingError,
      setGreeting,
      setGreetingLoading: setGreetingLoading || txLoading,
      prepareSetGreetingError,
      setGreetingError,
    });
  }, [
    address,
    greeting,
    getGreetingLoading,
    getGreetingError,
    setGreeting,
    setGreetingLoading,
    prepareSetGreetingError,
    setGreetingError,
    txLoading,
  ]);

  return state;
};

export { useGreeting };
