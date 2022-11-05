import React from "react";
import Link from "next/link";
import { Text, Image } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faAt,
  faPlugCircleBolt,
  faBuildingWheat,
  faCompass,
  faGamepad,
  faU,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
//import Image from "next/image";
import SectionTitle from "../components/sectionTitle";
import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
//import Testimonials from "../components/testimonials.js";

export default function About() {
  return (
    <>
      <SEO title="About | 0xaloysius" description="About 0xaloysius." />
      <Navbar />
      <main className="about-page h-full">
        <section className="relative py-16 ">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-32 bg-gradient-to-l from-trueZinc-400 to-trueZinc-600">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative -mt-32">
                      <Link
                        href="/"
                        className="inline-flex h-content w-auto fill-red-500 dark:fill-yellow-300 border-trueZinc-100 hover:border-trueZinc-600 rounded-half h-auto align-middle border-2 max-w-150-px focus:bg-trueZinc-500"
                      >
                        <Image
                          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/avatar.png"
                          objectFit="contain"
                          alt="0xaloysius Avatar"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-16 sm:mt-0">
                      <Link href="/contact">
                        <button
                          className="border-2 border-solid border-trueZinc-100  bg-truePurple-600 active:bg-trueZinc-600 uppercase text-trueZinc-100 dark:text-trueZinc-100 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Contact
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <button
                          className="bg-truePurple-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <Link
                            href="https://www.linkedin.com/in/0xaloysius/"
                            target="_blank"
                            rel="noreferrer"
                            alt="LinkedIn"
                          >
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              className="text-trueZinc-100"
                            />
                          </Link>
                        </button>
                      </div>

                      <div className="lg:mr-4 p-3 text-center">
                        {/*<span className=" text-xl font-bold block uppercase tracking-wide text-trueZinc-700 dark:text-trueZinc-100">*/}
                        <button
                          className="p-2 bg-truePurple-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <Link
                            href="https://ud.me/0xaloysius.x"
                            target="_blank"
                            rel="noreferrer"
                            alt="Unstoppable Domains"
                          >
                            <FontAwesomeIcon
                              icon={faU}
                              className="text-trueZinc-100"
                            />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <h3 className="text-3xl font-semibold leading-normal my-4 text-trueZinc-700 dark:text-trueZinc-100">
                    0xaloysius
                  </h3>
                  <div className="text-sm leading-normal mt-0 my-4 text-trueZinc-700 dark:text-trueZinc-100 font-bold uppercase">
                    <FontAwesomeIcon
                      icon={faLocationDot} //"fa-solid fa-location-dot "
                      className="mr-2 text-lg text-trueZinc-700 dark:text-trueZinc-100"
                      aria-hidden="true"
                    />
                    Los Angeles, California
                  </div>
                  <div className="text-sm leading-normal mt-0 my-4 text-trueZinc-700 dark:text-trueZinc-100 font-bold lowercase">
                    <FontAwesomeIcon
                      icon={faAt} //"fa-solid fa-at "
                      className="mr-2 text-lg text-trueZinc-700 dark:text-trueZinc-100"
                      aria-hidden="true"
                    />
                    <span>0xaloysius@skiff.com</span>
                  </div>

                  <div className="text-trueZinc-700 dark:text-trueZinc-100 mx-4">
                    <p className="italic mt-2 ">
                      Building strategic partnerships with 0xaloysius portfolio
                      businesses.
                    </p>
                  </div>
                </div>
                <div className="mt-8 py-10 border-t border-trueZinc-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-xl font-semibold leading-normal my-2 text-trueZinc-700 dark:text-trueZinc-100">
                        Creating bold investment strategies in innovative
                        sustainable & diverse companies & platforms.
                      </h3>
                      <h3 className="text-xl font-semibold leading-normal my-4 text-trueZinc-700 dark:text-trueZinc-100">
                        Portfolio & industry focus on,
                      </h3>
                      <div className="my-8 text-lg leading-relaxed text-trueZinc-700 dark:text-trueZinc-100">
                        <p className="my-4">
                          <FontAwesomeIcon
                            icon={faPlugCircleBolt}
                            className="mr-2 text-lg text-trueZinc-700 dark:text-trueZinc-100 "
                            aria-hidden="true"
                          />
                          Renewalable energy solutions.
                        </p>
                        <p className="my-4">
                          <FontAwesomeIcon
                            icon={faBuildingWheat}
                            className="mr-2 text-lg text-trueZinc-700 dark:text-trueZinc-100 "
                            aria-hidden="true"
                          />
                          Sustainable agritech systems.
                        </p>
                        <p className="my-4">
                          <FontAwesomeIcon
                            icon={faCompass}
                            className="mr-2 text-lg text-trueZinc-700 dark:text-trueZinc-100"
                            aria-hidden="true"
                          />
                          EV Startups.
                        </p>
                        <p className="my-4">
                          <FontAwesomeIcon
                            icon={faGamepad}
                            className="mr-2 text-lg text-trueZinc-700 dark:text-trueZinc-100"
                            aria-hidden="true"
                          />
                          WEB3 & gaming.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PopupWidget />
    </>
  );
}

function UDLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 256.000000 256.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
        fill="#f3f4f6"
        stroke="none"
      >
        <path d="M0 1280 l0 -1280 1280 0 1280 0 0 1280 0 1280 -1280 0 -1280 0 0 -1280z m1876 570 c2 0 75 53 162 118 86 65 163 122 170 126 9 6 12 -60 12 -316 l0 -323 -173 -70 -172 -70 -6 -220 c-6 -236 -7 -242 -69 -366 -67 -132 -230 -258 -381 -294 -269 -63 -551 71 -670 318 l-41 86 -46 -19 c-26 -10 -103 -41 -171 -69 -68 -28 -126 -50 -128 -47 -2 2 71 59 161 127 l166 123 2 270 3 270 165 92 c91 51 171 93 177 93 10 1 13 -54 15 -225 l3 -226 197 149 197 148 3 194 3 194 205 113 205 113 3 -144 c1 -80 5 -145 8 -145z" />
        <path d="M1247 1060 c-104 -43 -191 -81 -194 -84 -13 -13 45 -102 86 -131 37 -26 51 -30 111 -30 60 0 74 4 112 30 65 46 88 99 88 207 0 48 -3 88 -7 87 -5 0 -93 -36 -196 -79z" />
      </g>
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 448 512"
      preserveAspectRatio="xMidYMid meet"
    >
      <g xmlns="http://www.w3.org/2000/svg" fill="#f3f4f6" stroke="none">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </g>
    </svg>
  );
}
function DiscordLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 640 512"
      preserveAspectRatio="xMidYMid meet"
    >
      <g xmlns="http://www.w3.org/2000/svg" fill="#f3f4f6" stroke="none">
        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
      </g>
    </svg>
  );
}

function Brand() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="40"
      viewBox="0 0 200.00000000000003 45.57885426586286"
    >
      <g transform="matrix(1.1394713566465715,0,0,1.1394713566465715,-2.5524161214263077,-11.121240701674834)">
        <path d="M15.68 9.760000000000002 c3.6 0 6.4 2.12 6.4 6.12 l0 18.36 c0 3.52 -2.88 6.04 -6.4 6.04 l-7.04 0 c-3.52 0 -6.4 -2.16 -6.4 -6.04 l0 -18.44 c0 -3.64 2.8 -6.04 6.4 -6.04 l7.04 0 z M4.28 15.8 l0 18.44 c0 0.68 0.2 1.28 0.48 1.88 l12.92 -24 c-0.6 -0.32 -1.28 -0.52 -2 -0.52 l-7.04 0 c-2.32 0 -4.36 1.88 -4.36 4.2 z M20 34.24 l0 -18.44 c0 -0.88 -0.24 -1.68 -0.72 -2.36 l-13.2 24.2 c0.68 0.52 1.64 0.8 2.56 0.8 l7.04 0 c2.32 0 4.32 -1.88 4.32 -4.2 z M37.72 29.96 c0.4 0.2 0.72 0.52 0.92 0.92 l4.68 9.12 l-1.56 0 c-0.24 0 -0.52 -0.16 -0.6 -0.4 l-4.28 -8.36 c-0.08 -0.24 -0.36 -0.4 -0.6 -0.4 l-2.2 0 c-0.24 0 -0.52 0.16 -0.6 0.4 l-4.44 8.36 c-0.08 0.24 -0.36 0.4 -0.6 0.4 l-1.52 0 l4.84 -9.08 c0.2 -0.36 0.52 -0.68 0.92 -0.88 c-0.4 -0.2 -0.72 -0.52 -0.92 -0.92 l-4.88 -9.12 l1.56 0 c0.24 0 0.48 0.16 0.6 0.36 l4.4 8.4 c0.12 0.2 0.4 0.4 0.64 0.4 l2.24 0 c0.24 0 0.52 -0.2 0.6 -0.4 l4.24 -8.4 c0.12 -0.2 0.36 -0.36 0.6 -0.36 l1.56 0 l-4.64 9.04 c-0.2 0.4 -0.56 0.72 -0.96 0.92 z M56.8 19.96 c2.76 0 4.96 2.28 4.96 5.04 l0 14.56 c0 0.24 -0.2 0.44 -0.44 0.44 l-10.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -2.08 c0 -2.8 2.2 -5.04 4.96 -5.04 l8.24 0 c0.24 0 0.4 -0.16 0.44 -0.44 l0 -2.6 c0 -1.76 -1.4 -3.2 -3.16 -3.2 l-8.36 0 c-0.2 0 -0.4 -0.2 -0.4 -0.44 l0 -1.24 l8.76 0 z M51.28 38.24 l8.68 0 l0 -8.84 c-0.08 0.08 -0.2 0.16 -0.32 0.16 l-8.36 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 2.32 c0 1.76 1.4 3.16 3.16 3.16 z M66.52000000000001 39.56 l0 -27.92 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 27.88 l-1.36 0 c-0.24 0 -0.44 -0.16 -0.44 -0.4 z M84.24000000000001 40.28 l-6.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -10.52 c0 -2.76 2.2 -5.04 4.96 -5.04 l6.04 0 c2.72 0 4.92 2.28 4.92 5.04 l0 10.52 c0 2.76 -2.2 5 -4.92 5 z M84.24000000000001 21.4 l-6.04 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 10.84 c0 1.76 1.4 3.16 3.16 3.16 l6.04 0 c1.72 0 3.12 -1.4 3.12 -3.16 l0 -10.84 c0 -1.76 -1.4 -3.2 -3.12 -3.2 z M109.16 20 c0.24 0 0.44 0.16 0.44 0.4 l0 24.32 c0 2.8 -2.2 5.04 -4.96 5.04 l-10 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.4 -0.44 l9.6 0 c1.76 0 3.16 -1.4 3.16 -3.16 l0 -5.52 c-0.16 0.36 -0.56 0.56 -1.08 0.56 l-7.84 0.04 c-3.36 0 -4.92 -2.28 -4.92 -5.04 l0 -14.96 l1.36 0 c0.24 0 0.44 0.16 0.44 0.4 l0 14.6 c0 1.76 0.76 3.32 3.12 3.32 l8.2 0 c0.4 0 0.72 -0.32 0.72 -0.72 l0 -17.6 l1.36 0 z M127.92 33.04 c0 -0.24 -0.2 -0.52 -0.4 -0.56 l-12.48 -4.48 c-0.6 -0.2 -1.08 -0.88 -1.08 -1.52 l0 -2 c0 -2.76 2.2 -4.48 4.96 -4.48 l9.2 0 l0 1.2 c0 0.24 -0.2 0.44 -0.44 0.44 l-8.76 0 c-1.76 0 -3.16 1.12 -3.16 2.88 l0 1.48 c0 0.24 0.2 0.48 0.4 0.56 l12.4 4.48 c0.6 0.2 1.08 0.88 1.08 1.52 l0 3.04 c0 2.8 -2.24 4.4 -4.96 4.4 l-10.76 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.44 -0.44 l10.32 0 c1.72 0 3.24 -0.96 3.24 -2.68 l0 -2.6 z M134.44 39.56 l0 -19.56 l1.36 0 c0.24 0 0.44 0.16 0.44 0.4 l0 19.6 l-1.36 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 z M134.44 13 l0 -1.88 l1.4 0 c0.24 0 0.4 0.2 0.4 0.4 l0 1.88 l-1.4 0 c-0.24 0 -0.4 -0.16 -0.4 -0.4 z M141.84 35 l0 -15.04 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 14.76 c0 1.76 1.4 3.16 3.16 3.16 l6.04 0 c1.72 0 3.12 -1.4 3.12 -3.16 l0 -14.76 c0 -0.24 0.2 -0.44 0.44 -0.44 l1.36 0 l0 15.04 c0 2.76 -2.2 5 -4.92 5 l-6.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 z M176.04000000000002 33.04 c0 -0.24 -0.2 -0.52 -0.4 -0.56 l-12.48 -4.48 c-0.6 -0.2 -1.08 -0.88 -1.08 -1.52 l0 -2 c0 -2.76 2.2 -4.48 4.96 -4.48 l9.2 0 l0 1.2 c0 0.24 -0.2 0.44 -0.44 0.44 l-8.76 0 c-1.76 0 -3.16 1.12 -3.16 2.88 l0 1.48 c0 0.24 0.2 0.48 0.4 0.56 l12.4 4.48 c0.6 0.2 1.08 0.88 1.08 1.52 l0 3.04 c0 2.8 -2.24 4.4 -4.96 4.4 l-10.76 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.44 -0.44 l10.32 0 c1.72 0 3.24 -0.96 3.24 -2.68 l0 -2.6 z" />
      </g>
    </svg>
  );
}
