import "@/styles/globals.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { StateProvider } from "@/context";
import AppLayout from "@/layout/AppLayout";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={ChainId.Mumbai}>
      <StateProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </StateProvider>
    </ThirdwebProvider>
  );
}
