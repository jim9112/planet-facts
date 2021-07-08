/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

type Planet = {
  name: string;
};

const usePlanetSearch = (data: []) => {
  const [planet, setPlanet]: any = useState({});

  // find chosen planet in JSON file
  const findPlanet = (planetName: string) => {
    const found = data.find((planet: Planet) => planet.name === planetName);
    setPlanet(found);
  };

  // start page off displaying Mercury first
  useEffect(() => {
    findPlanet('Mercury');
  }, []);

  return { planet, findPlanet };
};

export default usePlanetSearch;
