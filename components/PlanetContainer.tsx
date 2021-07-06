import Image from 'next/image';

type CompProps = {
  planet: {
    name: string;
    images: {
      planet: string;
    };
    overview: {
      content: string;
      source: string;
    };
  };
};

const PlanetContainer = ({ planet }: CompProps) => {
  return (
    <div>
      <Image
        width="200px"
        height="200px"
        src={planet.images.planet}
        alt={planet.name}
      />
      <div>
        <h1>{planet.name}</h1>
        <p>{planet.overview.content}</p>
      </div>
      <span>
        Source:{' '}
        <a href={planet.overview.source} target="blank">
          Wikapedia
        </a>
      </span>
    </div>
  );
};

export default PlanetContainer;
