"use client";
import { Roboto_Mono } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function Faq() {
  return (
    <main className="px-8 mx-auto max-w-xl">
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-secondary focus:bg-accent my-2"
      >
        <div className="collapse-title text-xl font-medium">
          How do I work with <span className={roboto_mono.className}>0</span>
          xaloysius?
        </div>
        <div className="collapse-content">
          <p>
            The 0x portfolio partners with & employs people with a wide range of
            skills & experience.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow bg-secondary focus:bg-accent my-2"
      >
        <div className="collapse-title text-xl font-medium">
          Is <span className={roboto_mono.className}>0</span>xaloysius hiring?
        </div>
        <div className="collapse-content">
          <p>
            Our portfolio businesses are hiring! Book a meeting with me to
            discuss new possibilities.
          </p>
        </div>
      </div>

      <div
        tabIndex={2}
        className="collapse collapse-arrow bg-secondary focus:bg-accent my-2"
      >
        <div className="collapse-title text-xl font-medium">
          Who is <span className={roboto_mono.className}>0</span>xaloysius?
        </div>
        <div className="collapse-content">
          <p>Book an introduction call with me!</p>
        </div>
      </div>
    </main>
  );
}
