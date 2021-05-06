import "antd/dist/antd.css";
import Layout from "../Layout/Layout";
import { MyThemeProvider } from "../styles/ThemeContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MyThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyThemeProvider>
    </>
  );
}
