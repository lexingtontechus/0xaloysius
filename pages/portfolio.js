import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faShieldCat,
  faPepperHot,
  faSeedling,
  faChargingStation,
  faGlobe,
  faBuildingNgo,
  faPersonMilitaryToPerson,
} from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";
import PopupWidget from "../components/popupWidget";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Portfolio() {
  return (
    <>
      <SEO title="Portfolio | 0xaloysius" description="Portfolio 0xaloysius." />
      <div className="main">
        <Navbar />
        <SectionTitle pretitle="Portfolio" title="The 0x Mission Statement">
          "Our mission is to support Southern Californian start-ups and
          communities to create sustainable, renewable & secure platforms."
        </SectionTitle>
        <div className="container  items-center p-8 mx-auto w-full place-content-center">
          <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full h-auto">
            <div className="w-full sm:w-1/3 p-4 min-h-fit">
              <Card1 />
            </div>
            <div className="w-full sm:w-1/3 p-4 min-h-fit">
              <Card2 />
            </div>
            <div className="w-full sm:w-1/3 p-4 min-h-fit">
              <Card3 />
            </div>
            <div className="w-full sm:w-1/3 p-4 min-h-fit">
              <Card4 />
            </div>
            <div className="w-full sm:w-1/3 p-4 min-h-fit">
              <Card5 />
            </div>
            <div className="w-full sm:w-1/3 p-4 min-h-fit">
              <Card6 />
            </div>
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
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3">
        Lexington Tech
      </h5>
      <div className="bg-truePurple-500">
        <Image
          className="shadow-xl rounded-full h-auto relative align-middle border-none  max-w-150-px"
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-304181b3182265078bad3744c08e8ab6.png"
          height={300}
          width={300}
        />
      </div>
      <div className="text-trueZinc-100 text-md py-4">
        <p>
          {" "}
          BTAB Group
          <br />
          Management Consulting.
          <br />
          Technology Innovation.
        </p>
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-sm text-trueZinc-700 dark:text-trueZinc-100">
        President
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 m-h-fit">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3">
        del SOL VENTURES
      </h5>
      <div className="m-auto min-h-full max-h-72 bg-truePurple-500">
        <Image
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-dsvi.svg"
          height={300}
          width={300}
        />
      </div>
      <div className="m-auto bg-truePurple-500">
        <p className="text-trueZinc-100 text-md py-4">
          Digital Identity. <br />
          Data Privacy. <br />
          Privacy Toolkits.
        </p>
      </div>
      <div className="border-t border-trueZinc-200 py-3  w-full text-sm text-trueZinc-700 dark:text-trueZinc-100">
        Managing Partner
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3">
        4 Mo Beers
      </h5>
      <div className="py-4 bg-truePurple-500">
        <Image
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-4mobeers.svg"
          height="300"
          width="300"
        />
        <p className="text-trueZinc-100 text-md py-4">
          Beerverse. <br />
          NFT Collectibles. <br />
          Web3 Gaming.
        </p>
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-sm text-trueZinc-700 dark:text-trueZinc-100">
        Beer Shark
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3">
        Las Playas
      </h5>
      <div className="bg-truePurple-500">
        <Image
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-savi.svg"
          height={150}
          width={150}
          layout="responsive"
        />
        <p className="text-trueZinc-100 text-md py-4">
          Bar & Grill. <br />
          Fan Driven Sports. <br />
          Renewalable Energy. <br />
        </p>
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-sm text-trueZinc-700 dark:text-trueZinc-100">
        Managing Partner
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3">
        Sunset Ventures
      </h5>
      <div className="bg-truePurple-500 max-h-72">
        <Image
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-dsvi.svg"
          height={150}
          width={150}
          layout="responsive"
        />
        <p className="text-trueZinc-100 text-md py-4">
          Transition 3. <br />
          Veteran Integration. <br />
          VA Benefits. <br />
        </p>
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-sm text-trueZinc-700 dark:text-trueZinc-100">
        Managing Partner
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500">
      <h5 className="uppercase text-lg leading-tight font-medium mb-2 py-3">
        SAVI
      </h5>
      <div className="bg-truePurple-500 max-h-32">
        <Image
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-savi.svg"
          height={150}
          width={150}
          layout="responsive"
        />
        <p className="text-trueZinc-100 text-md py-4">
          Transition 3. <br />
          Veteran Integration. <br />
          VA Benefits. <br />
        </p>
      </div>
      <div className="border-t border-trueZinc-200 py-3 w-full text-sm text-trueZinc-700 dark:text-trueZinc-100">
        Board Member
      </div>
    </div>
  );
}
