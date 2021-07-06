type CompProps = {
  planet: {
    name: string;
  };
};

const PlanetContainer = ({ planet }: CompProps) => {
  return <div>{planet.name}</div>;
};

export default PlanetContainer;
