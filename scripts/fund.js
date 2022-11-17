const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const FundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding Contract......")
    const transactionResponse = await FundMe.fund({
        value: ethers.utils.parseEther("0.1"),
    })
    const transactionReceipt = await transactionResponse.wait(1)
    console.log("Funded Successfully!")
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
