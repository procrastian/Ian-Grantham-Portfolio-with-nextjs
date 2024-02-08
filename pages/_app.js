import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className={inconsolata.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
