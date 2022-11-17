const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const FundMe = await ethers.getContract("FundMe", deployer)

    console.log("Funding Contract ....")
    const transactionResponse = await FundMe.withdraw()
    await transactionResponse.wait(1)
    console.log("Withdraw was successful!!")
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
