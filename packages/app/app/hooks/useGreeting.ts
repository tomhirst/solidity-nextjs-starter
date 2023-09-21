"use client";

import { useEffect, useState } from "react";
import { useAccount, useContractRead, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi';
import abi from '../abi/Greeter.json';

const useGreeting = ({ newGreeting }: { newGreeting?: string }) : {
    address: `0x${string}` | undefined,
    greeting: string | null,
    getGreetingLoading: boolean,
    getGreetingError: boolean,
    setGreeting: (() => void) | undefined,
    setGreetingLoading: boolean,
    setGreetingError: boolean,
} => {
    // This pattern prevents Next.js server side hydration mismatch errors
    const [state, setState] = useState<{
        address: `0x${string}` | undefined,
        greeting: string | null,
        getGreetingLoading: boolean,
        getGreetingError: boolean,
        setGreeting: (() => void) | undefined,
        setGreetingLoading: boolean,
        setGreetingError: boolean,
    }>({
        address: undefined,
        greeting: ``,
        getGreetingLoading: true,
        getGreetingError: false,
        setGreeting: undefined,
        setGreetingLoading: false,
        setGreetingError: false,
    });

    const { address } = useAccount();

    // Otherwise we'd just return these values directly
    const { data: greeting, isLoading: getGreetingLoading, isError: getGreetingError } = useContractRead({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID ?? '31337'),
        abi,
        functionName: 'getGreeting',
    }) as { data: string | null, isLoading: boolean, isError: boolean };

    const { config } = usePrepareContractWrite({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID ?? '31337'),
        abi,
        functionName: 'setGreeting',
        args: [newGreeting],
    });

    const { data, write: setGreeting, isLoading: setGreetingLoading } = useContractWrite(config)

    const { isLoading: txLoading, isError: setGreetingError } = useWaitForTransaction({
        hash: data?.hash,
    });

    // Setting state in useEffect ensures that the state is only updated on the client side
    useEffect(() => {
        setState({
            address,
            greeting,
            getGreetingLoading: getGreetingLoading || txLoading,
            getGreetingError,
            setGreeting,
            setGreetingLoading,
            setGreetingError,
        });
    }, [address, greeting, getGreetingLoading, getGreetingError, setGreeting, setGreetingLoading, setGreetingError, txLoading]);

    return state;
}

export { useGreeting }