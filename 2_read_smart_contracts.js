const { ethers } = require("ethers")

const provider =new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/32ee0fb2ff214eb6bd6974f4bef1753f')

//contract interface
const ERC20_ABI = [
    "function name() view returns(string)",
    "function symbol() view returns(string)",
    "function totalSupply() view returns(uint256)",
    "function balanceOf(address) view returns(uint)"
]

//address of the contract
const address ='0xdAC17F958D2ee523a2206206994597C13D831ec7'
// contract object 
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {

    const name = await contract.name()
    const sym  = await contract.symbol()
    const supply = await contract.totalSupply()
    const balance = await contract.balanceOf(address)

    console.log("Name of token: ", name)
    console.log("Symbol of token: ", sym)
    console.log("TotalSupply of token: ", supply)
    console.log("Balance: ", ethers.utils.formatEther(balance))


}

main()