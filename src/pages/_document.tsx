import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Frontend Challenge</title>
        <meta
          name="description"
          content="Frontend Coding Interview creating a responsive header and footer based on requirements"
        />
        <link rel="icon" href="/nextjs.svg" sizes="any" />
      </Head>
      <body style={{ margin: "0px", minHeight: "100vh" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
