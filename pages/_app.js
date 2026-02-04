import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import MainNavigation from "../components/navBar/MainNavigation";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MainNavigation />
      <Component {...pageProps} />
      <Footer/>
    </Layout>
  );
}

export default MyApp;