const hre = require("hardhat");

async function main() {
  const uniswapV2Factory = "0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6";
  const uniswapV3Factory = "0x33128a8fC17869897dcE68Ed026d694621f6FDfD";
  const uniswapV3PositionManager = "0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6";
  const weth = "0x4200000000000000000000000000000000000006";

  const SwapRouter02 = await hre.ethers.getContractFactory("SwapRouter02");
  const swapRouter02 = await SwapRouter02.deploy(
    uniswapV2Factory,
    uniswapV3Factory,
    uniswapV3PositionManager,
    weth,
  );
  await swapRouter02.deployed();
  console.log("swapRouter02 deployed to:", swapRouter02.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });