import Layout from "../components/layout/Layout";

import { CartContextProvider } from "../components/store/cart-context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {


  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}

export default MyApp;
