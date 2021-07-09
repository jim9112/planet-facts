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
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-10 py-7 sm:py-0">
      <div className="border border-gray-600 p-5 grid grid-flow-col sm:block items-center">
        <h4 className="font-spartan font-bold text-xs">ROTATION TIME</h4>
        <span className="font-antonio font-medium text-xl md:text-4xl text-right sm:text-left">
          {rotation}
        </span>
      </div>
      <div className="border border-gray-600 p-5 grid grid-flow-col sm:block items-center">
        <h4 className="font-spartan font-bold text-xs">REVOLUTION TIME</h4>
        <span className="font-antonio font-medium text-xl md:text-4xl text-right sm:text-left">
          {revolution}
        </span>
      </div>
      <div className="border border-gray-600 p-5 grid grid-flow-col sm:block items-center">
        <h4 className="font-spartan font-bold text-xs">RADIUS</h4>
        <span className="font-antonio font-medium text-xl md:text-4xl text-right sm:text-left">
          {radius}
        </span>
      </div>
      <div className="border border-gray-600 p-5 grid grid-flow-col sm:block items-center">
        <h4 className="font-spartan font-bold text-xs">AVERAGE TEMP.</h4>
        <span className="font-antonio font-medium text-xl md:text-4xl text-right sm:text-left">
          {temperature}
        </span>
      </div>
    </div>
  );
};

export default PlanetStats;
