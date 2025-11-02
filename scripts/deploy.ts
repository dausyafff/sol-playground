import { ethers } from "hardhat";

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  console.log("⏳ Deploying contract...");

  const hello = await HelloWorld.deploy();
  await hello.waitForDeployment();

  const address = await hello.getAddress();
  console.log("✅ HelloWorld deployed to:", address);

  const tx = hello.deploymentTransaction();
  if (tx) {
    const receipt = await tx.wait();
    console.log("⛽ Gas used:", receipt.gasUsed.toString());
    console.log("💰 Transaction hash:", receipt.hash);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
