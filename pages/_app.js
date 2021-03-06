import Layout from "../assets/components/layout/Layout";
import "../assets/translations/i18nextInit";
import GlobalStyles from "../assets/styles/GlobalStyles";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
