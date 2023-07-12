"use client";
import Image from "next/image";

const HeroImage = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/${src}?w=${width}&q=${
    quality || 75
  }`;
};
export default function Hero() {
  return (
    <div className="hero min-h-screen bg-secondary mx-auto">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <div className="avatar mt-4">
            <div className="max-w-96 rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://storage.fleek-internal.com/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/avatar.png" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mt-4">
           WEB3 & Sustainable Ecosystems
          </h1>
          <h2 className="py-6 text-3xl">
            Transitioning to a world of new protocols, digital ownership and
            systems powering new technologies & WEB3.
          </h2>
          <h2 className="py-6 text-3xl">
            Building diverse companies in Southern California.
          </h2>
        </div>
      </div>
    </div>
  );
}
