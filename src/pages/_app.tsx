import { useEffect } from "react";
import "@/styles/style.scss";
export default function App({ Component, pageProps }: any) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("bootstrap/dist/css/bootstrap.min.css");
  }, []);
  return <Component {...pageProps} />;
}
