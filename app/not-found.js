'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';

export default function NotFound({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">AI Is Not Available</h1>
       <Player
        autoplay
        loop
        src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lottie/error404.json"
        style={{ height: '500px', width: '500px' }}
        className="m-8"
      ></Player>
      <div className="join">
      <button className="btn-primary btn uppercase text-base-content mr-3">
            <Link href="/"> HOME</Link>
          </button>
          <button
            className="btn-primary btn uppercase text-base-content"
            onPress={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Reset
          </button>
    </div>
    </div>
  </div>
  </div>
    
  );
}