# Changelog

A list of versions and notable changes for `solidity-nextjs-starter`.

## [2.1.0] - Minor update - 2024-04-03

### [2.1.0] - Added

- Added `@tanstack/react-query` peer dependency

### [2.1.0] - Changed

- Upgraded `viem`, `wagmi` and `@rainbow-me/rainbowkit`
- Reworked `Providers.tsx` and `useGreeting.ts` to support upgrade

## [2.0.0] - Major update - 2023-09-25

### [2.0.0] - Added

- wagmi hooks for better interfacing with `Greeter.sol`
- RainbowKit for better wallet management
- Prettier to consistently format code

### [2.0.0] - Changed

- TypeScript in favour of JavaScript in `packages/contracts` and `packages/app`
- viem in favour of ethers in `packages/app`
- Next.js 13 app directory from pages

## [1.0.0] - Initial release - 2021-08-03

Project launched to help developers create their first Ethereum dApp.
