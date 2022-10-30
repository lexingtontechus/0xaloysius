import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faShieldCat,
  faPepperHot,
  faSeedling,
  faChargingStation,
  faSun,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar";
import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";
import PopupWidget from "../components/popupWidget";
export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio | del SOL"
        description="Portfolio del SOL. Early-stage VC in biotech, cleantech, foodtech & mobility."
      />
      <div className="main">
        <Navbar />
        <SectionTitle pretitle="Portfolio" title="del SOL Mission Statement">
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
      </div>
      <PopupWidget />
    </>
  );
}

function Card1() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueGray-700 border-solid">
      <h5 className="uppercase text-trueGray-700 dark:text-trueGray-100 text-xl leading-tight font-medium mb-2 py-3  border-b border-trueGray-200">
        Foodtech
      </h5>
      <div>
        <Image
          className="p-6 bg-cover bg-no-repeat bg-trueGray-700"
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-304181b3182265078bad3744c08e8ab6.png"
          height="300"
          width="300"
          layout="responsive"
        />
        <p className="text-trueGray-100 text-md mb-4">
          Vertical systems. <br />
          Climate-controlled.. <br />
          Reduced emissions.
        </p>
      </div>
      <div className="border-t border-trueGray-200 py-3 w-full text-sm text-trueGray-700 dark:text-trueGray-100">
        <FontAwesomeIcon
          icon={faPepperHot} //"fa-solid fa-pepper-hot"
          className="text-red-700 dark:text-red-400 pr-2"
          aria-hidden="true"
        />{" "}
        Nature. Meet Nuture.
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueGray-700 border-solid">
      <h5 className="uppercase text-trueGray-700 dark:text-trueGray-100 text-xl leading-tight font-medium mb-2 py-3  border-b border-trueGray-200">
        Cybersecurity
      </h5>
      <div>
        <Image
          className="p-6 bg-cover bg-no-repeat bg-trueGray-700"
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-4dd5fd75c6118b7161fca2ffd991842a.png"
          height="300"
          width="300"
          layout="responsive"
        />
        <p className="text-trueGray-100 text-md mb-4">
          Digital Identity. <br />
          Data Privacy. <br />
          Privacy Protection Toolkits.
        </p>
      </div>
      <div className="border-t border-trueGray-200 py-3  w-full text-sm text-trueGray-700 dark:text-trueGray-100">
        <FontAwesomeIcon
          icon={faShieldCat} //"fa-solid fa-pepper-hot"
          className="text-trueSky-700 dark:text-trueSky-400 pr-2"
          aria-hidden="true"
        />{" "}
        Privacy. Protection.
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueGray-700 border-solid">
      <h5 className="uppercase text-trueGray-700 dark:text-trueGray-100 text-xl leading-tight font-medium mb-2 py-3 border-b border-trueGray-200">
        Cleantech
      </h5>
      <div>
        <Image
          className="p-6 bg-cover bg-no-repeat bg-trueGray-700"
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-5ef96019d86f8e5221c37d9733cb5492.png"
          height="300"
          width="300"
          layout="responsive"
        />
        <p className="text-trueGray-100 text-md mb-4">
          Offgrid Solutions <br />
          Solid State Batteries. <br />
          Community Renewal.
        </p>
      </div>
      <div className="border-t border-trueGray-200 py-3 w-full text-sm text-trueGray-700 dark:text-trueGray-100">
        <FontAwesomeIcon
          icon={faSeedling} //"fa-solid fa-pepper-hot"
          className="text-green-700 dark:text-green-400 pr-2"
          aria-hidden="true"
        />{" "}
        Sustain. Renew.
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueGray-700 border-solid">
      <h5 className="uppercase text-trueGray-700 dark:text-trueGray-100 text-xl leading-tight font-medium mb-2 py-3 border-b border-trueGray-200">
        Mobility
      </h5>
      <div>
        <Image
          className="p-6 bg-cover bg-no-repeat bg-trueGray-700"
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-5af1ef6e7de4a6e775448b69ac0a9851.png"
          height="300"
          width="300"
          layout="responsive"
        />
        <p className="text-trueGray-100 text-md mb-4">
          Hybrid EV. <br />
          EV Infrastructure. <br />
          Renewalable Energy. <br />
        </p>
      </div>
      <div className="border-t border-trueGray-200 py-3 w-full text-sm text-trueGray-700 dark:text-trueGray-100">
        <FontAwesomeIcon
          icon={faChargingStation} //"fa-solid fa-pepper-hot"
          className="text-purple-700 dark:text-purple-400 pr-2"
          aria-hidden="true"
        />{" "}
        Electrified Future.
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueGray-700 border-solid">
      <h5 className="uppercase text-trueGray-700 dark:text-trueGray-100 text-xl leading-tight font-medium mb-2 py-3 px-6 border-b border-trueGray-200">
        Creators
      </h5>
      <div>
        <Image
          className="p-6 bg-cover bg-no-repeat bg-trueGray-700"
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-f701b63cfe38e57fa0408c238af32027.png"
          height="300"
          width="300"
          layout="responsive"
        />
        <p className="text-trueGray-100 text-md mb-4">
          Create. <br />
          Socalize. <br />
          Influence. <br />
        </p>
      </div>
      <div className="border-t border-trueGray-200 py-3 w-full text-sm text-trueGray-700 dark:text-trueGray-100">
        <FontAwesomeIcon
          icon={faPhotoVideo} //"fa-solid fa-pepper-hot"
          className="text-white pr-2"
          aria-hidden="true"
        />{" "}
        Content. Partners.
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueGray-700 border-solid">
      <h5 className="text-trueGray-700 dark:text-trueGray-100 text-xl leading-tight font-medium mb-2 py-3 px-6 border-b border-trueGray-200">
        del SOL
      </h5>
      <div>
        <Image
          className="p-6 bg-cover bg-no-repeat bg-trueGray-700"
          src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/doodleipsum-3c3a259ced051ff05ebf18363560f8a3.png"
          height="300"
          width="300"
          layout="responsive"
        />
        <p className="text-trueGray-100 text-md mb-4">
          Discover. <br />
          Energize. <br />
          Explore. <br />
        </p>
      </div>
      <div className="border-t border-trueGray-200 py-3 w-full text-sm text-trueGray-700 dark:text-trueGray-100">
        <FontAwesomeIcon
          icon={faSun} //"fa-solid fa-pepper-hot"
          className="text-yellow-700 dark:text-yellow-400 pr-2"
          aria-hidden="true"
        />{" "}
        The. Ultimate. Venture.
      </div>
    </div>
  );
}
