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
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <div className="border border-gray-600 p-5">
        <h4 className="font-spartan font-bold text-xs">ROTATION TIME</h4>
        <span className="font-antonio font-medium text-4xl">{rotation}</span>
      </div>
      <div className="border border-gray-600 p-5">
        <h4 className="font-spartan font-bold text-xs">REVOLUTION TIME</h4>
        <span className="font-antonio font-medium text-4xl">{revolution}</span>
      </div>
      <div className="border border-gray-600 p-5">
        <h4 className="font-spartan font-bold text-xs">RADIUS</h4>
        <span className="font-antonio font-medium text-4xl">{radius}</span>
      </div>
      <div className="border border-gray-600 p-5">
        <h4 className="font-spartan font-bold text-xs">AVERAGE TEMP.</h4>
        <span className="font-antonio font-medium text-4xl">{temperature}</span>
      </div>
    </div>
  );
};

export default PlanetStats;
