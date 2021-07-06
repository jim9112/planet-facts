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
    <div className="grid grid-cols-2">
      <div>
        <Image
          width="200px"
          height="200px"
          src={planet.images.planet}
          alt={planet.name}
        />
      </div>
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
            <li>01 OVERVIEW</li>
            <li>02 INTERNAL STRUCTURE</li>
            <li>03 SURFACE GEOLOGY</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PlanetContainer;
