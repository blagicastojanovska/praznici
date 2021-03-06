import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <title>Календар со празници 2021</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* HTML Meta Tags */}
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Календар со празници во 2021г. во Република Северна Македонија"
      />
      <meta name="theme-color" content="#2A3D3D" />
      <meta name="application-name" content="Календар со празници 2021" />
      <meta name="apple-mobile-web-app-title" content="Календар со празници 2021" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Календар со празници 2021" />
      <meta
        itemProp="description"
        content="Календар со празници во 2021г. во Република Северна Македонија"
      />
      <meta itemProp="image" content="/img/favicon/page.png" />
      <link rel="canonical" href="https://www.praznici.mk" />

      {/* Facebook Meta Tags */}
      <meta property="og:title" content="Календар со празници 2021" key="title" />
      <meta property="og:url" content="https://www.praznici.mk" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Календар со празници во 2021г. во Република Северна Македонија"
      />
      <meta property="og:image" content="/img/favicon/page.png" />
      <meta property="og:site_name" content="Календар со празници 2021" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Календар со празници 2021" />
      <meta
        name="twitter:description"
        content="Календар со празници во 2021г. во Република Северна Македонија"
      />
      <meta name="twitter:image" content="/img/favicon/page.png" />

      <link rel="icon" href="/img/favicon/favicon.ico" />

      <link rel="apple-touch-icon" href="/img/favicon/apple-touch-icon.png" />

      <meta name="robots" content="index,follow" />
    </Head>
  );
}
