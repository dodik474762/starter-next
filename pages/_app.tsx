import LayoutsElement from "@/components/Elements/Layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutsElement>
      <Component {...pageProps} />
    </LayoutsElement>
  );
}
