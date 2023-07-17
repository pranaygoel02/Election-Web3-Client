import "@/styles/globals.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { StateProvider } from "@/context";
import AppLayout from "@/layout/AppLayout";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={ChainId.Mumbai}>
      <StateProvider>
        <Toaster />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </StateProvider>
    </ThirdwebProvider>
  );
}
