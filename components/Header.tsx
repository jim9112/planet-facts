import Image from 'next/image';
import hamburger from '../public/static/icon-hamburger.svg';

export default function Header({ findPlanet }: any) {
  // changes planet on the main screen
  const handleClick = (planetName: string) => {
    findPlanet(planetName);
  };
  return (
    <div className="grid grid-flow-col sm:grid-flow-row sm:text-center lg:grid-flow-col lg:text-left text-xs py-5 px-5 items-center">
      <h1 className="font-antonio font-medium text-3xl">The Planets</h1>
      <ul className="sm:grid grid-flow-col font-spartan font-bold cursor-pointer hidden">
        <li onClick={() => handleClick('Mercury')}>MERCURY</li>
        <li onClick={() => handleClick('Venus')}>VENUS</li>
        <li onClick={() => handleClick('Earth')}>EARTH</li>
        <li onClick={() => handleClick('Mars')}>MARS</li>
        <li onClick={() => handleClick('Jupiter')}>JUPITER</li>
        <li onClick={() => handleClick('Saturn')}>SATURN</li>
        <li onClick={() => handleClick('Uranus')}>URANUS</li>
        <li onClick={() => handleClick('Neptune')}>NEPTUNE</li>
      </ul>
      <div className="justify-self-end sm:hidden">
        <Image
          src={hamburger}
          alt="hamburger icon"
          width="24px"
          height="17px"
          layout="fixed"
        />
      </div>
    </div>
  );
}
