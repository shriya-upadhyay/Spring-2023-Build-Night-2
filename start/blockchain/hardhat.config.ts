// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const Private_Key =
  "3c1d272f2be3518cc91067104aa6477a78b4234bb7a12e63dd0fd3af6edde418";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/6bZmuhww7eILmy-gbSoX-jdRyLauxOZ_`,
      accounts: [`0x${Private_Key}`],
    },
  },
};

export default config;