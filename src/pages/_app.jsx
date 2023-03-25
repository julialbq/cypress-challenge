import Head from "next/head";
import { Header } from "../components/Header";
import { LanguageProvider } from "../context/LanguageProvider";
import { EntriesProvider } from "../context/EntriesProvider";
import { NotificationProvider } from "../context/NotificationProvider";
import cx from "./_app.module.scss";
import "../styles/global.scss";

export function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>

      <Header />

      <main className={cx.main}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

const AppWithProviders = (props) => {
  return (
    <LanguageProvider>
      <EntriesProvider>
        <NotificationProvider>
          <App {...props} />
        </NotificationProvider>
      </EntriesProvider>
    </LanguageProvider>
  );
};

export default AppWithProviders;
