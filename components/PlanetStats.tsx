type CompProps = {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
};

const PlanetStats = ({
  rotation,
  revolution,
  radius,
  temperature,
}: CompProps) => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <h4>ROTATION TIME</h4>
        <span>{rotation}</span>
      </div>
      <div>
        <h4>REVOLUTION TIME</h4>
        <span>{revolution}</span>
      </div>
      <div>
        <h4>RADIUS</h4>
        <span>{radius}</span>
      </div>
      <div>
        <h4>AVERAGE TEMP.</h4>
        <span>{temperature}</span>
      </div>
    </div>
  );
};

export default PlanetStats;
