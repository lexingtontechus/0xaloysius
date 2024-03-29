/* eslint-disable react/jsx-no-target-blank */
import Hero from "./components/hero";
import SectionTitle from "./components/sectionTitle";
import Faq from "./components/faq";
import Portfolio from "./components/portfolio";
import { Roboto_Mono } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
const loader = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};
export const metadata = {
  title: "0xaloysius LLC",
  description: "0xaloysius",
  keywords: [
    "0xaloysius",
    "Web 3",
    "WEB3",
    "Blockchain",
    "IPFS",
    "SAVI",
    "Sunset Ventures Inc.",
    "del SOL Ventures Inc.",
    "Lexington Tech LLC",
    "LXT Group LLC",
    "Las Playas Inc.",
    "4MoBeers DAO Inc.",
  ],
};
export const openGraphImage = {
  images: [
    "https://storage.fleek-internal.com/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/0xaloysius.svg",
  ],
};
const Home = () => {
  return (
    <main>
      <Hero />
      <div className="px-8">
        <SectionTitle pretitle="The 0x Stack" title="Portfolio Organizations">
          The <span className={roboto_mono.className}>0</span>x portfolio is
          comprised of 5 companies & 1 non-profit. Each company is focused on a
          specific mission and innovations in its industry.
        </SectionTitle>
        <Portfolio />
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          How to partner or work with <span className={roboto_mono}>0</span>
          xaloysius?
        </SectionTitle>
        <Faq />
      </div>
    </main>
  );
};
export default Home;
