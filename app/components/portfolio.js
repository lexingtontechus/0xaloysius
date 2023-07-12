"use client";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function Portfolio() {
  return (
    <main className="px-8 mx-auto max-w-xl">
      <div className="flex flex-wrap items-center justify-between w-full gap-5 mx-auto bg-secondary p-4 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium">
            The <span className={roboto_mono.className}>0</span>x Portfolio
          </h2>
          <p className="mt-2 font-medium text-opacity-90 lg:text-xl"></p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button className="btn btn-info uppercase">
            <Link href="/portfolio">More</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
