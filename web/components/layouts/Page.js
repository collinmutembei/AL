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
      <Nav />
      <div className="container mx-auto h-4/6">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Page;
