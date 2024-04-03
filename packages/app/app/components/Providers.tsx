"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { hardhat, goerli } from "wagmi/chains";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'Solidity Next.js Starter',
  projectId: process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID ?? "",
  chains: [hardhat, goerli],
  ssr: true,
});

const Providers = ({ children }: { children: ReactNode }) => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>{children}</RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export { Providers };
