import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
import { FalkoChainlinkFunctionsConsumer__factory } from '../../typechain-types';
dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(
    process.env.RPC_ENDPOINT_URL ?? ''
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? '', provider);

  console.log(wallet.address);

  const contractFactory = new FalkoChainlinkFunctionsConsumer__factory(wallet);
  const contract = await contractFactory.deploy();
  await contract.waitForDeployment();

  console.log('address: ', contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0xFc7cBC428600C1E0cfc9652e218753c2C7744a04
// 0xa6484E50bF74Be278a0bEC93cb1DE4F712C71664
