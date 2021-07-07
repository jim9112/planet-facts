import { useEffect, useReducer } from 'react';

const useModeSelection = (planet: any) => {
  const [mode, dispatch]: any = useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'overview':
        return {
          name: planet.name,
          planetImage: planet.images.planet,
          secondPlanetImage: null,
          content: planet.overview.content,
          source: planet.overview.source,
        };
      case 'internal':
        return {
          name: planet.name,
          planetImage: planet.images.internal,
          secondPlanetImage: null,
          content: planet.structure.content,
          source: planet.structure.source,
        };
      case 'geology':
        return {
          name: planet.name,
          planetImage: planet.images.planet,
          secondPlanetImage: planet.images.geology,
          content: planet.geology.content,
          source: planet.geology.source,
        };
      default:
        return state;
    }
  }, []);

  // update content as planet selection changes
  useEffect(() => {
    dispatch({ type: 'overview' });
  }, [planet]);

  return { mode, dispatch };
};

export default useModeSelection;
