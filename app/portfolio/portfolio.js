"use client";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";
import LogoLXT from "../components/logo";
export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function Portfolio() {
  return (
    <main>
      <div className="hero min-h-screen bg-secondary svg-portfolio">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold uppercase">
              The <span className={roboto_mono.className}>0</span>x Mission
            </h1>
            <p className="py-6 font-semibold text-2xl">
              Support diversified investments in Southern Californian start-ups
              and communities to create sustainable, renewable & secure
              platforms and services.
            </p>
            <h2 className="text-3xl font-bold uppercase mt-8">
              Cornerstone Ecosystems
            </h2>
            <p className="py-6 font-semibold text-2xl">
              Collaborate and invest with the SoCal business & tech communities
              and foster employment in the 0x portfolio and partner ventures.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto m-8 max-w-2xl">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div>
            <Card1 />
          </div>
          <div>
            <Card2 />
          </div>
          <div>
            <Card3 />
          </div>
          <div>
            <Card4 />
          </div>
          <div>
            <Card5 />
          </div>
          <div>
            <Card6 />
          </div>
        </div>
      </div>
    </main>
  );
}

function Card1() {
  return (
    <div className="grow card w-full bg-secondary shadow-xl min-w-[300px]">
      <figure className="pt-4">
        <Link
          href="https://lexingtontech.us"
          target="_blank"
          alt="Lexington Tech LLC."
        >
          {" "}
          <LogoLXT height={32} width={32} />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Lexington Tech LLC</h2>
        <p>President</p>
        <p>Management Consultancy</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info btn-square">
            <Link
              href="https://linkedin.com/company/lexingtontechus"
              target="_blank"
              alt="Lexington Tech | LinkedIn"
            >
              <LinkedIn />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="grow card w-full bg-secondary shadow-xl min-w-[300px]">
      <figure className="pt-4">
        <Link
          href="https://delsolventures.nft"
          target="_blank"
          alt="del SOL VENTURES"
        >
          <img
            src="https://storage.fleek-internal.com/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-dsvi-light.svg"
            alt="del SOL VENTURES INC."
            className="h-32"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">del SOL VENTURES INC.</h2>
        <p>Investor</p>
        <p>Venture Capital & Investment</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info btn-square">
            <Link
              href="https://linkedin.com/company/delsolventures"
              target="_blank"
              alt="del SOL VENTURES | LinkedIn"
            >
              <LinkedIn />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="grow card w-full bg-secondary shadow-xl  min-w-[300px]">
      <figure className="pt-4">
        <Link
          href="https://4mobeers.nft"
          target="_blank"
          alt="4MoBeers DAO Inc."
        >
          <img
            src="https://storage.fleek-internal.com/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-4mobeers.svg"
            alt="4MoBeers DAO Inc."
            className="h-32 bg-zinc-200 mask mask-circle"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">4MoBeers DAO Inc.</h2>
        <p>Beer Shark</p>
        <p>WEB3, Gaming & Sports Book</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info btn-square">
            <LinkedIn />
          </button>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="grow card w-full bg-secondary shadow-xl min-w-[300px]">
      <figure className="pt-4">
        <Link
          href="https://lasplayas.nft"
          target="_blank"
          alt="Las Playas Inc. | LinkedIn"
        >
          <img
            src="https://storage.fleek-internal.com/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-lasplayas.svg"
            alt="Las Playas Inc."
            className="h-32"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Las Playas Inc.</h2>
        <p>Investor</p>
        <p>Food, Beverage & Entertainment</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info btn-square">
            <Link
              href="https://linkedin.com/company/lasplayas"
              target="_blank"
              alt="Las Playas Inc. | LinkedIn"
            >
              <LinkedIn />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="grow card w-full bg-secondary shadow-xl min-w-[300px]">
      <figure className="pt-4">
        <Link
          href="https://sunsetventures.nft"
          target="_blank"
          alt="Sunset Ventures Inc."
        >
          <img
            src="https://storage.fleek-internal.com/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-sunset.svg"
            alt="Sunset Ventures Inc."
            className="h-32"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Sunset Ventures Inc.</h2>
        <p>Investor</p>
        <p>Venture Capital</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info btn-square">
            <Link
              href="https://linkedin.com/company/sunsetventuresinc"
              target="_blank"
              alt="Sunset Ventures Inc. | LinkedIn"
            >
              <LinkedIn />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="grow card w-full bg-secondary shadow-xl min-w-[300px]">
      <figure className="pt-4">
        <Link href="https://savivets.org" target="_blank" alt="SAVI">
          <img
            src="https://storage.fleek-internal.com/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-savi.svg"
            alt="SAVI"
            className="h-32"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">SAVI</h2>
        <p>Board Member</p>
        <p> Veteran Transition & Benefits</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info btn-square">
            <Link
              href="https://linkedin.com/company/savivets"
              target="_blank"
              alt="SAVI | LinkedIn"
            >
              <LinkedIn />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function LinkedIn() {
  return (
    <svg height="2em" viewBox="0 0 448 512" className="fill-zinc-50">
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
}
