import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldCat,
  faPepperHot,
  faSeedling,
  faChargingStation,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar";
import Image from "next/image";
import SEO from "../components/seo";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardFooter,
  CCardText,
} from "@coreui/react";

export default function Card() {
  return (
    <>
      <SEO
        title="Home | del SOL"
        description="Early-stage VC in biotech, cleantech, foodtech & mobility."
      />

      <Navbar />
      <div className="container w-10/12 items-center p-8 mx-auto w-full place-content-center">
        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full">
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
    </>
  );
}

function Card1() {
  return (
    <CCard
      style={{ width: "300px", height: "400px" }}
      className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 "
    >
      <CCardImage
        orientation="top"
        src="/img/logo_lxt.svg"
        width={200}
        height={200}
      />
      <CCardBody>
        <CCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CCardText>
      </CCardBody>
    </CCard>
  );
}

function Card2() {
  return (
    <CCard
      style={{ width: "300px", height: "400px" }}
      className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 "
    >
      <CCardImage
        orientation="top"
        src="/img/logo-dsvi.svg"
        width={200}
        height={200}
      />
      <CCardBody>
        <CCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CCardText>
      </CCardBody>
    </CCard>
  );
}

function Card3() {
  return (
    <CCard
      style={{ width: "300px", height: "400px" }}
      className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 "
    >
      <CCardImage
        orientation="top"
        src="/img/logo_lxt.svg"
        width={200}
        height={200}
      />
      <CCardBody>
        <CCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CCardText>
      </CCardBody>
    </CCard>
  );
}

function Card4() {
  return (
    <CCard
      style={{ width: "300px", height: "400px" }}
      className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 "
    >
      <CCardImage
        orientation="top"
        src="/img/logo_lxt.svg"
        width={200}
        height={200}
      />
      <CCardBody>
        <CCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CCardText>
      </CCardBody>
    </CCard>
  );
}

function Card5() {
  return (
    <CCard
      style={{ width: "300px", height: "400px" }}
      className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 "
    >
      <CCardImage
        orientation="top"
        src="/img/logo_lxt.svg"
        width={200}
        height={200}
      />
      <CCardBody>
        <CCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CCardText>
      </CCardBody>
    </CCard>
  );
}

function Card6() {
  return (
    <CCard
      style={{ width: "300px", height: "400px" }}
      className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500 "
    >
      <CCardImage
        orientation="top"
        src="/img/logo_lxt.svg"
        width={200}
        height={200}
      />
      <CCardBody>
        <CCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CCardText>
      </CCardBody>
    </CCard>
  );
}
