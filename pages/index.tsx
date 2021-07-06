import Header from '../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import data from '../lib/data.json';
import { useEffect, useState } from 'react';
import usePlanetSearch from '../lib/usePlanetSearch';
import PlanetContainer from '../components/PlanetContainer';

export default function Home() {
  const { planet, findPlanet } = usePlanetSearch(data);
  console.log(data);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header findPlanet={findPlanet} />
      {planet?.name && <PlanetContainer planet={planet} />}

      <footer></footer>
    </div>
  );
}
