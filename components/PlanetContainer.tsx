import { useState } from 'react';
import PlanetImageContainer from './PlanetImageContainer';

type CompProps = {
  planet: {
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
  };
};

const PlanetContainer = ({ planet }: CompProps) => {
  const [displayMode, setDisplayMode] = useState<
    'overview' | 'internal' | 'geology'
  >('overview');
  return (
    // display planet image based on user method selection
    // To do: find less verbose way of doing this
    <div className="grid grid-cols-2">
      {displayMode === 'overview' && (
        <PlanetImageContainer
          name={planet.name}
          planetImage={planet.images.planet}
          secondPlanetImage={null}
        />
      )}
      {displayMode === 'internal' && (
        <PlanetImageContainer
          name={planet.name}
          planetImage={planet.images.internal}
          secondPlanetImage={null}
        />
      )}
      {displayMode === 'geology' && (
        <PlanetImageContainer
          name={planet.name}
          planetImage={planet.images.planet}
          secondPlanetImage={planet.images.geology}
        />
      )}
      <div>
        <h1 className="font-antonio font-medium text-7xl">{planet.name}</h1>
        <p className="font-spartan">{planet.overview.content}</p>
        <span>
          Source:{' '}
          <a href={planet.overview.source} target="blank">
            Wikapedia
          </a>
        </span>
        <nav>
          <ul>
            <li onClick={() => setDisplayMode('overview')}>01 OVERVIEW</li>
            <li onClick={() => setDisplayMode('internal')}>
              02 INTERNAL STRUCTURE
            </li>
            <li onClick={() => setDisplayMode('geology')}>
              03 SURFACE GEOLOGY
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PlanetContainer;
