import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Terabox Video Player, Embed, Download Terabox videos free",
  description: "Watch, Embed and download Terabox Videos 🔥 100% working ✅ Download Terabox videos with TeraDL",
  keywords: ["terabox", "terabox direct download", "terabox downloader", "terabox online downloader", "terabox player", "terabox online player", "terabox links", "terabox link converter", "terabox direct link", "terabox direct videos", "terabox direct files", "terabox bypass", "terabox link bypass", "terabox video downloader", "terabox video download", "terabox link downloader", "terabox downloader online"],
  authors: [{ name: "teraplayr.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Terabox Video Player, Embed, Download Terabox videos",
    description: "Watch, Embed and download Terabox Videos 🔥 100% working ✅ Download Terabox videos with TeraDL",
    type: "website",
    images: "./og.png",
    url: "https://teraplayr.com",
    siteName: "teraplayr.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "teraplayr.com Player, Embed, Download Terabox videos",
    description: "Watch, Embed and download Terabox Videos 🔥 100% working ✅ Download Terabox videos with TeraDL",
    images: "./og.png",
    site: "@microsoft",
  },
};

let analytics = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7RJW86QMV7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7RJW86QMV7');
</script>`;

const jsonld = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "teraplayr.com",
  "url": "https://teraplayr.com",
  "description": "Watch, Embed and download Terabox Videos 🔥 100% working ✅ Download Terabox videos with TeraDL",
  "publisher": {
    "@type": "Organization",
    "name": "teraplayr.com"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "100"
  }
}
</script>`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-black"  >
      <head>
        <script data-cfasync="false" src="//d11kp34sgosvfa.cloudfront.net/?gspkd=1160435"></script>
        <link rel="icon" href="/image.png" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" /> 

        <div className="analytics">
          <div dangerouslySetInnerHTML={{__html: analytics}}></div>
        </div>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossorigin="anonymous"></Script>
        <div dangerouslySetInnerHTML={{ __html: jsonld }}></div>
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics/>
    </html>
  );
}

