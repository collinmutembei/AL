import Router from "next/router";
import NProgress from "nprogress";
import styles from "@/styles/Home.module.css";
import Header from "@/components/layouts/Header";
import Nav from "@/components/layouts/Nav";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function Home() {
  return (
    <>
      <Header title="make every penny worthy" />
      <div className={styles.container}>
        <Nav className={styles.navbar} />
        <main className={styles.main}>
          <p className={styles.description}>
            <code className={styles.code}>Talk to AL</code>
          </p>

          <div className={styles.grid}>
            <a href="#" className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
              <h3>Voice</h3>
            </a>

            <a href="#" className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <h3>Chat</h3>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://azure.microsoft.com/en-us/free/ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Azure
          </a>
        </footer>
      </div>
    </>
  );
}
