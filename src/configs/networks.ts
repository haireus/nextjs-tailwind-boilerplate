import type { Chain } from "wagmi";
import { chain } from "wagmi";

// export const DEFAULT_CHAIN_ID = parseInt(
//   process.env.REACT_APP_CHAIN_ID as string,
//   10
// );

export const DEFAULT_CHAIN_ID = 56;

export const ethereum = {
  ...chain.mainnet,
  rpcUrls: {
    default: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    infura: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    public: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  },
};

export const avalandche: Chain = {
  id: 43114,
  name: "Avalanche C-Chain",
  network: "avalanche",
  rpcUrls: {
    default: "https://rpc.ankr.com/avalanche",
  },
  nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
  blockExplorers: {
    default: {
      name: "snowtrace",
      url: "https://snowtrace.io/",
    },
  },
};

export const fantomOpera: Chain = {
  id: 250,
  name: "Fantom Opera",
  network: "fantom",
  nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
  rpcUrls: {
    default: "https://rpc.ftm.tools",
  },
  blockExplorers: {
    default: {
      name: "FTMScan",
      url: "https://ftmscan.com",
    },
  },
};

const bscExplorer = { name: "BscScan", url: "https://bscscan.com" };

export const bsc: Chain = {
  id: 56,
  name: "BNB Smart Chain",
  network: "bsc",
  rpcUrls: {
    default: "https://bsc-dataseed1.binance.org",
    dataseed2: "https://bsc-dataseed2.binance.org",
    ninicoin: "https://bsc-dataseed1.ninicoin.io",
    defibit: "https://bsc-dataseed1.defibit.io",
    ankr: "https://rpc.ankr.com/bsc",
    bnb48: "https://rpc-bsc.bnb48.club",
    onerpc: "https://1rpc.io/bnb",
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18,
  },
  multicall: {
    address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    blockCreated: 15921452,
  },
};

export const bscTest: Chain = {
  id: 97,
  name: "BNB Smart Chain Testnet",
  network: "bsc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Chain Native Token",
    symbol: "tBNB",
  },
  rpcUrls: {
    default: "https://data-seed-prebsc-1-s2.binance.org:8545/",
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://testnet.bscscan.com" },
  },
  multicall: {
    address: "0xb66a4fE12138C4391A98F29E34EFE4Cc7A445AE5",
    blockCreated: 21965366,
  },
  testnet: true,
};

export const wagmiChains = [ethereum, bsc];
