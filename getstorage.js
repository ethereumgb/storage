const ethers = require('ethers');

const provider = ethers.getDefaultProvider('ropsten');

const contractAddress = "0xf1f5896ace3a78c347eb7eab503450bc93bd0c3b";

async function main() {
   const result = await provider.getStorageAt(contractAddress, 1);
   console.log("result", result);
}

main().then( () => console.log("done"));
