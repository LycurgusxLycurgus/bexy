import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const LandingLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={`${inter.className} bg-background text-text`}>
      <header className="p-4">
        <Image
          src="https://i.imgur.com/k1x7uBw.jpeg"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-lg"
        />
      </header>
      {children}
    </body>
  </html>
);

export default LandingLayout;