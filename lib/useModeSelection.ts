import { useReducer } from 'react';

type CompProps = {
  name: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
};

const useModeSelection = (planet: CompProps) => {
  // initial state is set to "overview mode"
  const initialState = {
    name: planet.name,
    planetImage: planet.images.planet,
    secondPlanetImage: null,
    content: planet.overview.content,
    source: planet.overview.source,
  };

  // reducer returns content based on mode selected
  const reducer = (state: {}, action: { type: string }) => {
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
  };

  const [mode, dispatch]: any = useReducer(reducer, initialState);

  return { mode, dispatch };
};

export default useModeSelection;
