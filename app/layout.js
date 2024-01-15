import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import "./index.css";
import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cal from "./components/cal";

import { roboto_mono } from "./fonts";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en" className={roboto_mono} suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Cal />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
