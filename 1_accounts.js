
// Importin ether.js library
const { ethers } = require("ethers")

// connecting to blockchain node through provider class and JsonRPC protocol
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/32ee0fb2ff214eb6bd6974f4bef1753f');

//storing address of a random account
const address = '0x00000000219ab540356cBB839Cbe05303d7705Fa'


const main = async () => {

    //fetching balance of the account by passing its address
    const balance = await provider.getBalance(address)
    //converting the balance into 18 decimal of ether
    console.log("Balance :", ethers.utils.formatEther(balance))

}

main()