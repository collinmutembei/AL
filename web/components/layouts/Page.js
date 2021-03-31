import Router from "next/router";
import NProgress from "nprogress";
import Header from "@/components/layouts/Header";
import Nav from "@/components/layouts/Nav";
import Footer from "@/components/layouts/Footer";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Page = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
