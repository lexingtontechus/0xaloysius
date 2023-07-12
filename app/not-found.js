"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

export default function NotFound({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">When AI Goes Wrong</h1>
          <Player
            autoplay
            loop
            src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lottie/error404.json"
            style={{ height: "400px", width: "400px" }}
            className="m-8"
          ></Player>
          <button className="btn-info btn uppercase mr-3">
            <Link href="/">HOME</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
