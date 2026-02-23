import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import MainNavigation from "../components/navBar/MainNavigation";
import Footer from "../components/footer/Footer";
import { GlobalContextProvider } from "../store/globalContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Layout>
        <MainNavigation />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </GlobalContextProvider>
  );
}

export default MyApp;
