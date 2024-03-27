import Image from 'next/image';
import Hero from './components/Hero';
import React, { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.9" />
      </Head>
      <Hero />
    </main>
  );
}
