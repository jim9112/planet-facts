import useModeSelection from '../lib/useModeSelection';
import DescriptionContainer from './DescriptionContainer';
import PlanetImageContainer from './PlanetImageContainer';
import ModeSelect from './ModeSelect';
import PlanetStats from './PlanetStats';

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
    // display planet image and data based on user method selection
    <div className="px-24">
      <div className="grid grid-cols-2 mt-20 mb-20">
        {mode.name && (
          <PlanetImageContainer
            name={mode.name}
            planetImage={mode.planetImage}
            secondPlanetImage={mode.secondPlanetImage}
          />
        )}
        <div className="grid grid-cols-1 gap-10">
          <DescriptionContainer
            name={mode.name}
            content={mode.content}
            source={mode.source}
          />
          <ModeSelect dispatch={dispatch} />
        </div>
      </div>
      <PlanetStats
        rotation={planet.rotation}
        radius={planet.radius}
        revolution={planet.revolution}
        temperature={planet.temperature}
      />
    </div>
  );
};

export default PlanetContainer;
