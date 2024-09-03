import { Sepolia } from "@usedapp/core";

// export const ROUTER_ADDRESS = "[YOUR ADDRESS HERE]";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/uIt02jewEn7tRh3nbKuk_JooCeL6u4DY",
  },
};
