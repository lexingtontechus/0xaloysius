import Link from "next/link";
import Image from "next/image";

import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";
import PopupWidget from "../components/popupWidget";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Portfolio() {
  return (
    <>
      <SEO title="Portfolio | 0xaloysius" description="Portfolio 0xaloysius." />

      <Navbar />
      <SectionTitle pretitle="Portfolio" title="The 0x Mission Statement">
        "Our mission is to support Southern Californian start-ups and
        communities to create sustainable, renewable & secure platforms."
      </SectionTitle>
      <div className="container  items-center p-8 mx-auto w-full place-content-center">
        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full h-auto">
          <div className="w-full sm:w-1/3 p-4">
            <Card1 />
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <Card2 />
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <Card3 />
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <Card4 />
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <Card5 />
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <Card6 />
          </div>
        </div>
      </div>

      <Footer />
      <PopupWidget />
    </>
  );
}

function Card1() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 min-h-400-px">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3 px-4 text-trueZinc-100">
        Lexington
      </h5>
      <div className="relative block p-4 max-w-sm max-h-72 mx-auto">
        <Link href="https://lexingtontech.us" target="_blank" alt="4 Mo Beers">
          <Image
            className="shadow-xl rounded-full mx-auto relative align-middle border-none  max-w-150-px"
            src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-lxt.svg"
            height={250}
            width={250}
            object-fit="scale-down"
            alt="Lexington Tech LLC"
          />
        </Link>
      </div>
      <div className="text-trueZinc-100 text-md py-4">
        BTAB Group. <br />
        Technology Consulting. <br />
        Management Consulting.
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-md text-trueZinc-700 dark:text-trueZinc-100">
        President
        <p className="uppercase font-xs text-xs text-trueZinc-700 dark:text-trueZinc-100">
          Lexington Tech LLC.
        </p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 min-h-400-px">
      <h5 className="text-lg leading-tight font-medium mb-2 py-3 px-4 text-trueZinc-100">
        del SOL
      </h5>
      <div className="relative block p-4 max-w-sm max-h-72 mx-auto">
        <Link href="https://delsolventures.nft" target="_blank" alt="del SOL">
          <Image
            className="shadow-xl rounded-half mx-auto relative align-middle border-none  max-w-150-px"
            src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-dsvi.svg"
            height={220}
            width={220}
            object-fit="scale-down"
            alt="del SOL VENTURES INC."
          />
        </Link>
      </div>
      <div className="text-trueZinc-100 text-md py-4">
        Digital Identity. <br />
        Data Privacy. <br />
        Privacy Toolkits.
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-md text-trueZinc-700 dark:text-trueZinc-100">
        Managing Partner.
        <p className="uppercase font-xs text-xs text-trueZinc-700 dark:text-trueZinc-100">
          del SOL VENTURES INC.
        </p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 min-h-400-px">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3 px-4 text-trueZinc-100">
        4 Mo Beers
      </h5>
      <div className="relative block p-4 max-w-sm max-h-72 mx-auto">
        <Link href="https://4mobeers.nft" target="_blank" alt="4 Mo Beers">
          <Image
            className="shadow-xl rounded-full mx-auto relative align-middle border-2 border-trueZinc-1100 border-solid p-2  max-w-150-px"
            src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-4mobeers.svg"
            height={250}
            width={250}
            object-fit="scale-down"
          />
        </Link>
      </div>
      <div className="text-trueZinc-100 text-md py-4">
        Beerverse. <br />
        NFT Collectibles. <br />
        Web3 Gaming.
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-md text-trueZinc-700 dark:text-trueZinc-100">
        Beer Shark
        <p className="uppercase font-xs text-xs text-trueZinc-700 dark:text-trueZinc-100">
          4 Mo Beers Inc.
        </p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 min-h-400-px">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3 px-4 text-trueZinc-100">
        Las Playas
      </h5>
      <div className="relative block p-4 max-w-sm max-h-72">
        <Link href="https://lasplayas.nft" target="_blank" alt="Las PLayas">
          <Image
            className="shadow-xl rounded-full mx-auto relative align-middle border-2 border-trueZinc-1100 border-solid p-2  max-w-150-px"
            src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-4mobeers.svg"
            height={250}
            width={250}
            object-fit="scale-down"
          />
        </Link>
      </div>
      <div className="text-trueZinc-100 text-md py-4">
        Bar & Grill. <br />
        Fan Driven Sports. <br />
        Renewalable Energy. <br />
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-md text-trueZinc-700 dark:text-trueZinc-100">
        Managing Partner
        <p className="uppercase font-xs text-xs text-trueZinc-700 dark:text-trueZinc-100">
          Las Playas Inc.
        </p>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 max-h-400-px">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3 px-4 text-trueZinc-100">
        Sunset
      </h5>
      <div className="relative block p-4 max-w-sm max-h-72">
        <Link
          href="https://sunsetventures.nft"
          target="_blank"
          alt="Sunset Ventures"
        >
          <Image
            className="shadow-xl rounded-full mx-auto relative align-middle border-2 border-trueZinc-1100 border-solid p-2  max-w-150-px"
            src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-sunset.svg"
            height={250}
            width={250}
            object-fit="cover"
          />
        </Link>
      </div>
      <div className="text-trueZinc-100 text-md py-4">
        Transition 3. <br />
        Veteran Integration. <br />
        VA Benefits. <br />
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-md text-trueZinc-700 dark:text-trueZinc-100">
        Managing Partner
        <p className="font-xs text-xs text-trueZinc-700 dark:text-trueZinc-100">
          Sunset Ventures Inc.
        </p>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 min-h-400-px">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3 px-4 text-trueZinc-100">
        SAVI
      </h5>
      <div className="relative block p-4 max-w-sm max-h-72">
        <Link href="https://savivets.org" target="_blank" alt="SAVIVETS">
          <Image
            className="shadow-xl rounded-full mx-auto relative align-middle border-2 border-trueZinc-1100 border-solid p-2  max-w-150-px"
            src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-savi.svg"
            height={250}
            width={250}
            object-fit="cover"
          />
        </Link>
      </div>
      <div className="text-trueZinc-100 text-md py-4">
        Transition 3. <br />
        Veteran Integration. <br />
        VA Benefits. <br />
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-md text-trueZinc-700 dark:text-trueZinc-100">
        Board Member
        <p className="uppercase font-xs text-xs text-trueZinc-700 dark:text-trueZinc-100">
          Strategic Alliance Veteran Integration
        </p>
      </div>
    </div>
  );
}

function LogoLXT() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 312.5 312.5"
      preserveAspectRatio="xMidYMid meet"
      class="css-ata32y"
      id="hfghagba"
      width="200"
      height="200"
    >
      <g
        id="SvgjsG4798"
        featurekey="rootContainer"
        transform="matrix(6.25,0,0,6.25,0.31249597668647766,0)"
        fill="#FFFFFF"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M24.95 0a25 25 0 1 0 25 25 25 25 0 0 0-25-25zm0 46.91a22 22 0 1 1 22-22 22 22 0 0 1-22 21.99z"
          fill="#FFFFFF"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M24.95 3.65a21.3 21.3 0 1 0 21.3 21.3 21.33 21.33 0 0 0-21.3-21.3z"
          fill="#FFFFFF"
        />
      </g>
      <g
        id="SvgjsG4799"
        featurekey="nameFeature-0"
        transform="matrix(2.6150626467234352,0,0,2.6150626467234352,51.397489143226416,88.24686516991014)"
        fill="#39424A"
      >
        <path
          d="M21.6 40 l-19.84 0 l0 -28.24 l8.92 0 l0 21.12 l10.92 0 l0 7.12 z M55 40 l-10.52 0 l-6.16 -10.16 l-6.24 10.16 l-10.48 0 l10.92 -15.16 l-9.16 -13.08 l10.48 0 l4.48 7.76 l4.56 -7.76 l10.2 0 l-8.92 13.04 z M78.24 18.72 l-7.16 0 l0 21.28 l-8.92 0 l0 -21.28 l-7.2 0 l0 -6.96 l23.28 0 l0 6.96 z"
          fill="#39424A"
        />
      </g>
    </svg>
  );
}
