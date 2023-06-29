"use client";
import { Player } from "@lottiefiles/react-lottie-player";
export default function Loading() {
  return (
    <div className="hero min-h-screen bg-primary">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-accent uppercase">
            Generating AI
          </h1>
          <Player
            autoplay
            loop
            src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lottie/loading.json"
            style={{ height: "500px", width: "500px" }}
            className="m-8"
          ></Player>
        </div>
      </div>
    </div>
  );
}

{
  /*classsName="relative flex flex-col justify-center overflow-hidden m-8">*/
}