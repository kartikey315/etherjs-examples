const { ethers } = require("ethers")

const provider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/32ee0fb2ff214eb6bd6974f4bef1753f')

const account1 = '0x31E3239f5305A26672A5923cd2439e1C936A4921'
const account2 = '0xEa7d8B13A307719c229AbE903B9e020EA59b9F0E'

const privatekey = '0f35b36262ffeca9c50e17d85cdd754f6bafa81a2abf22fd489e61809cd753fb'
const wallet = new ethers.Wallet(privatekey, provider)

const main = async () => {

    const tx = await wallet.sendTransaction({to: account2, value: ethers.utils.parseEther("0.025")})

    await tx.wait()
    console.log(tx)

}

main()