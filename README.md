# A full stack dApp starter built on Ethereum (Solidity) with Next.js (React)

## Prerequisites

[MetaMask wallet browser extension](https://metamask.io/download.html).

## Getting Started

### Environment Setup

Duplicate `.env.example` to `.env` and fill out the environment variables.

### Running The Smart Contract Locally

Compile the ABI for the smart contract using `npx hardhat compile`.

Deploy the smart contract to the local blockchain for testing with `npx hardhat node`.

If you're successful, you'll get something like the following CLI output:

```
Greeter deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
```

Then in a new terminal window, `npx hardhat run scripts/deploy.js --network localhost`.

If you're successful, you'll be presented with a number of account details in the CLI. Here's an example:

```
Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

### Adding A Local Account To MetaMask

Open your MetaMask browser extension and change the network to `Localhost 8545`.

Next, import one of the accounts by adding its Private Key (for example, `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80` to MetaMask.

If you're successful, you should see the a balance resembling something like `9999.99 ETH` in the wallet.

### Connecting The Front-End

In a new terminal window, load the front-end with `npm run dev`. If you want to use an alternate port from `3000`, use `npm run dev -- --port=1234`, or whatever port number you prefer.