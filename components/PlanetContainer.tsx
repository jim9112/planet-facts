import useModeSelection from '../lib/useModeSelection';
import DescriptionContainer from './DescriptionContainer';
import PlanetImageContainer from './PlanetImageContainer';

type CompProps = {
  planet: {
    name: string;
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
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
};

const PlanetContainer = ({ planet }: CompProps) => {
  const { mode, dispatch } = useModeSelection(planet);

  return (
    // display planet image based on user method selection
    <>
      <div className="grid grid-cols-2">
        {mode.name && (
          <PlanetImageContainer
            name={mode.name}
            planetImage={mode.planetImage}
            secondPlanetImage={mode.secondPlanetImage}
          />
        )}
        <div>
          <DescriptionContainer
            name={mode.name}
            content={mode.content}
            source={mode.source}
          />
          <nav>
            <ul className="cursor-pointer">
              <li onClick={() => dispatch({ type: 'overview' })}>
                01 OVERVIEW
              </li>
              <li onClick={() => dispatch({ type: 'internal' })}>
                02 INTERNAL STRUCTURE
              </li>
              <li onClick={() => dispatch({ type: 'geology' })}>
                03 SURFACE GEOLOGY
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div>
          <h4>ROTATION TIME</h4>
          <span>{planet.rotation}</span>
        </div>
        <div>
          <h4>REVOLUTION TIME</h4>
          <span>{planet.revolution}</span>
        </div>
        <div>
          <h4>RADIUS</h4>
          <span>{planet.radius}</span>
        </div>
        <div>
          <h4>AVERAGE TEMP.</h4>
          <span>{planet.temperature}</span>
        </div>
      </div>
    </>
  );
};

export default PlanetContainer;
