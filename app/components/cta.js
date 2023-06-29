"use client";
import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <main>
      <div className="flex flex-wrap items-center justify-between w-full gap-5 mx-auto bg-secondary p-4 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to explore 0xaloysius ventures?
          </h2>
          <p className="mt-2 font-medium text-opacity-90 lg:text-xl"></p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button className="btn btn-info">
            <Link href="/portfolio">View Portfolio</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
