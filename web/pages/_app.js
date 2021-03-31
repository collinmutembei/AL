import App from "next/app";
import Page from "@/components/layouts/Page";
import "@/styles/tailwind.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.layout || Page;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
