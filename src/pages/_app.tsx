import "../styles/global.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import { WagmiConfig } from "wagmi";

import { client } from "@/utils/wagmi";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
        <ToastContainer />
      </WagmiConfig>
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
