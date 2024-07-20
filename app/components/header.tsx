"use client"

import { TonConnectButton } from "@tonconnect/ui-react";

export const onConnect = () => {
  const container = document.getElementById("ton-connect-button");
  const btn = container?.querySelector("button");

  console.log(container)
  if (btn) {
    btn.click();
  }
};

export default function Header() {
  return (
    <div>
      <TonConnectButton />
    </div>
  )
}