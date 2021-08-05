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

## Demo'ing The Functionality

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

## Deploying To The Ropsten Test Network

*This is a more advanced step after running the smart contract locally.*

Up to now, the smart contract has been running on a local blockchain. The next step, is to test how it works on a live test network. We'll do this by deploying to Ropsten.

### MetaMask

First, switch your MetaMask network from `Localhost 8545` to `Ropsten Test Network`.

Then, view the account details of your test account. Click `Export Private Key`. After entering your password, you'll be given a private key. Copy and paste your private key (example, `df57089aefbcaf7ba0bc227dafbffa9fc08a93fdc65e1e42214a14efcf23656e`) as the value of `ROPSTEN_PRIVATE_KEY` in `.env`.

**Important:** Never expose the private key of an account with real assets inside. Always add private keys as environment variables. Never commit private keys to code.

### Infura

[Infura](https://infura.io/) is a service that allows developers to connect to Ethereum infrastructure through their API. In this boilerplate, we'll be using Infura to deploy our smart contract to the Ropsten test network.

Sign up for an account if you don't have one already, then [create a new Ethereum project](https://infura.io/dashboard/ethereum/). Name your project, then select `Ropsten` from the endpoints drop down. Save changes.

Copy and paste the URL starting with `https` and set it as the `ROPSTEN_URL` value in your `.env` file.

### Obtaining Test ETH

You'll need some test ETH in your wallet for use on Ropsten. Head over to the [Ropsten Ethereum Faucet](https://faucet.ropsten.be/), paste in your wallet account address (for example, `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`) and press `Send me test Ether`.

In a few minutes, you should see your balance update in MetaMask. This is your test ETH.

### Deploying Your Smart Contract To Ropsten

In your terminal enter, `npx hardhat run scripts/deploy.js --network ropsten`.

If you're successful, you'll get a confirmation message as follows:

```
Greeter deployed to: 0x9045cEc7161f380C224ae95c15EbE96659A53c46
```

This address is where your smart contract is deployed on the Ropsten Test Network.

Post deployment, you should also see your ETH decrease a little in MetaMask from the gas transaction fee.

### Etherscan

Because your smart contract is now deployed to a live test network, you'll be able to view it's details on [Etherscan](https://ropsten.etherscan.io/). Go to [Ropsten Etherscan](https://ropsten.etherscan.io/) and copy and paste the address you were given in the previous step (for example, `0x9045cEc7161f380C224ae95c15EbE96659A53c46`) into the explorer.

You'll be able to see all historical transactions and events here.

### Testing The Functionality

Change the `NEXT_PUBLIC_GREETER_ADDRESS` variable in `.env` to be the smart contract address on the Ropsten Test Network (for example, `0x9045cEc7161f380C224ae95c15EbE96659A53c46`).

Start (or restart) the front-end using `npm run dev`.

Fetching the greeting from the blockchain will return `Hello world!` on first run.

Setting a new greeting may take a little longer than it did locally as we're using a real test network.

All instance of setting a new greeting will now create a transaction attached to the smart contract that you can view on [Ropsten Etherscan](https://ropsten.etherscan.io/)

## Roadmap

- Add a [smart contract for minting NFTs](https://docs.openzeppelin.com/contracts/3.x/erc721)
- Create a TypeScript fork