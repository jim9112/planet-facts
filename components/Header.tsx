import Image from 'next/image';
import { useRef, useState } from 'react';
import hamburger from '../public/static/icon-hamburger.svg';

export default function Header({ findPlanet }: any) {
  // To do: move logic to hook
  const [mobile, setMobile] = useState(false);
  const navMenu = useRef<null | HTMLDivElement>(null);

  const handleHamburgerClick = () => {
    navMenu.current?.classList.remove('hidden');
    navMenu.current?.classList.add('inline');
    setMobile(true);
    console.log(navMenu.current);
  };
  // changes planet on the main screen
  const handleClick = (planetName: string) => {
    findPlanet(planetName);
    if (mobile) {
      navMenu.current?.classList.remove('inline');
      navMenu.current?.classList.add('hidden');
      setMobile(false);
    }
  };

  return (
    <div className="relative grid grid-flow-col sm:grid-flow-row sm:text-center lg:grid-flow-col lg:text-left text-xs py-5 px-5 items-center">
      <h1 className="font-antonio font-medium text-3xl sm:text-2xl sm:mb-9 lg:mb-0">
        The Planets
      </h1>
      <div
        ref={navMenu}
        className="fixed z-10 w-full h-full top-0 left-0 px-6 sm:px-0 sm:static sm:block sm:bg-transparent sm:mt-0 hidden mt-16 bg-background">
        <ul className="grid grid-flow-row font-spartan font-bold cursor-pointer items-center divide-y divide-border-primary sm:divide-none sm:grid-flow-col sm:h-full">
          <li
            className="py-5 sm:py-0 flex items-center"
            onClick={() => handleClick('Mercury')}>
            <span className="w-5 h-5 block bg-mercury rounded-full mr-6 sm:hidden"></span>{' '}
            MERCURY
          </li>
          <li
            className="py-5 sm:py-0 flex items-center"
            onClick={() => handleClick('Venus')}>
            <span className="w-5 h-5 block bg-venus rounded-full mr-6 sm:hidden"></span>{' '}
            VENUS
          </li>
          <li
            className="py-5 sm:py-0 flex items-center"
            onClick={() => handleClick('Earth')}>
            <span className="w-5 h-5 block bg-earth rounded-full mr-6 sm:hidden"></span>{' '}
            EARTH
          </li>
          <li
            className="py-5 sm:py-0 flex items-center"
            onClick={() => handleClick('Mars')}>
            <span className="w-5 h-5 block bg-mars rounded-full mr-6 sm:hidden"></span>{' '}
            MARS
          </li>
          <li
            className="py-5 sm:py-0 flex items-center"
            onClick={() => handleClick('Jupiter')}>
            <span className="w-5 h-5 block bg-jupiter rounded-full mr-6 sm:hidden"></span>{' '}
            JUPITER
          </li>
          <li
            className="py-5 sm:py-0 flex items-center"
            onClick={() => handleClick('Saturn')}>
            <span className="w-5 h-5 block bg-saturn rounded-full mr-6 sm:hidden"></span>{' '}
            SATURN
          </li>
          <li
            className="py-5 sm:py-0 flex items-center"
            onClick={() => handleClick('Uranus')}>
            <span className="w-5 h-5 block bg-uranus rounded-full mr-6 sm:hidden"></span>{' '}
            URANUS
          </li>
          <li
            className="py-5 sm:py-0 flex items-center"
            onClick={() => handleClick('Neptune')}>
            <span className="w-5 h-5 block bg-neptune rounded-full mr-6 sm:hidden"></span>{' '}
            NEPTUNE
          </li>
        </ul>
      </div>
      <div
        className="justify-self-end sm:hidden cursor-pointer"
        onClick={() => handleHamburgerClick()}>
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
