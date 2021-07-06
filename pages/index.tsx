import Header from '../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import data from '../lib/data.json';
import usePlanetSearch from '../lib/usePlanetSearch';
import PlanetContainer from '../components/PlanetContainer';

export default function Home() {
  const { planet, findPlanet } = usePlanetSearch(data);
  console.log(data);
  return (
    <div className="bg-background-stars bg-black min-h-screen text-white">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header findPlanet={findPlanet} />
      {planet?.name && <PlanetContainer planet={planet} />}
      <footer></footer>
    </div>
  );
}
