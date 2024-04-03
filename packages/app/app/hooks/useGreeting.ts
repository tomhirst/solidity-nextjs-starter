"use client";

import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
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
  const { address } = useAccount();

  const {
    data: greeting,
    isLoading: getGreetingLoading,
    isError: getGreetingError,
  } = useReadContract({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi,
    functionName: "getGreeting",
    watch: true,
  });

  const {
    data: setGreetingHash,
    writeContract: setGreeting,
    isPending: setGreetingLoading,
    isError: setGreetingError,
  } = useWriteContract();

  const { 
    isLoading: txLoading,
  } = useWaitForTransactionReceipt({
    hash: setGreetingHash,
  });

  return {
    address,
    greeting,
    getGreetingLoading,
    getGreetingError,
    setGreeting: () => setGreeting?.({
      address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
      abi,
      functionName: "setGreeting",
      args: [newGreeting],
      onSuccess: () => onSetGreetingSuccess,
    }),
    setGreetingLoading: setGreetingLoading || txLoading,
    prepareSetGreetingError: newGreeting === undefined,
    setGreetingError,
  };
};

export { useGreeting };
