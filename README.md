# A full stack dApp starter built on Ethereum (Solidity) with Next.js (React)

This repo contains boilerplate code for interacting with a simple smart contract from the client-side using [Solidity](https://soliditylang.org/), [React](https://reactjs.org/) and [TailwindCSS](https://tailwindcss.com/).

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MetaMask wallet browser extension](https://metamask.io/download.html).

## Getting Started

### Environment Setup

Duplicate `.env.example` to `.env` and fill out the `HARDHAT_CHAIN_ID` environment variable.

Run `npm install`.

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

In `.env` set the `NEXT_PUBLIC_GREETER_ADDRESS` environment variable to the address your smart contract was deployed to. For example, `0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0`.

In a new terminal window, load the front-end with `npm run dev`. If you want to use an alternate port from `3000`, use `npm run dev -- --port=1234`, or whatever port number you prefer.

## Demo'ing the functionality

Once set up, go to `localhost:3000` (or whatever post number you used), to view your dApp in the browser.

Clicking `Fetch greeting from the blockchain` should bring back a value of `Hello world!` in the input above. This is the default string passed to the smart contract on first deloy.

To update the greeting value, type something in the input with placeholder `Write a new greeting`, then click `Set new greeting on the blockchain`. If you're successful, a MetaMask window will open in your browser. From here you can connect the local account you added earlier and sign the transaction.

Click `Fetch greeting from the blockchain` again to see the changes you've made.

## Editing The Front-End

To modify the front page of your application, edit `pages/index.js`.

All [TailwindCSS classes](https://tailwindcss.com/docs) are available to you.

To lint your front-end code, use `npm run lint`.

## Testing

To test your smart contracts, run `npx hardhat test`.

A sample test can be found in `test/sample-test.js`.

## Roadmap

- Deploy the greeter smart contract to a live test network
- Add a [smart contract for minting NFTs](https://docs.openzeppelin.com/contracts/3.x/erc721)