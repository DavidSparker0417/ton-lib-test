"use client"
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Image from "next/image";
import JettonTransfer from "./components/jetton";
import Header from "./components/header";

export default function Home() {
  return (
    <TonConnectUIProvider manifestUrl="https://minter.ton.org/tonconnect-manifest.json">
      <Header/>
      <JettonTransfer />
    </TonConnectUIProvider>
  );
}
