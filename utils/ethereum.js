// Check for MetaMask wallet browser extension
function hasEthereum () {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'
}

export { hasEthereum }