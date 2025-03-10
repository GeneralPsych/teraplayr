'use client';
import Downloader from "@/components/downloader";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SEO from "@/components/SEO";
 
export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-10">
        <Downloader />

        <SEO/>
      </main>
      <Footer />
    </>
  );
}
