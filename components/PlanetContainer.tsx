import useModeSelection from '../lib/useModeSelection';
import DescriptionContainer from './DescriptionContainer';
import PlanetImageContainer from './PlanetImageContainer';
import ModeSelect from './ModeSelect';
import PlanetStats from './PlanetStats';
import { useState } from 'react';

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
  const [currentMode, setCurrentMode] = useState<any>();

  return (
    // display planet image and data based on user method selection
    <div className="px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:mt-20 sm:mb-20">
        {/* mobile version of mode selector */}
        <ModeSelect
          dispatch={dispatch}
          mobile={true}
          planetName={planet.name}
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
        />
        {/* To Do: add a loading state */}
        {mode.name && (
          <PlanetImageContainer
            name={mode.name}
            planetImage={mode.planetImage}
            secondPlanetImage={mode.secondPlanetImage}
          />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 sm:mt-28 lg:mt-0">
          <DescriptionContainer
            name={mode.name}
            content={mode.content}
            source={mode.source}
          />
          {/* mode selector tor tablets and larger */}
          <ModeSelect
            dispatch={dispatch}
            mobile={false}
            planetName={planet.name}
            currentMode={currentMode}
            setCurrentMode={setCurrentMode}
          />
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
