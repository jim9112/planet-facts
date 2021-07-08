import Image from 'next/image';

type AppProps = {
  planetImage: string;
  secondPlanetImage: null | string;
  name: string;
};
const PlanetImageContainer = ({
  planetImage,
  secondPlanetImage,
  name,
}: AppProps) => {
  return (
    <div className="relative grid place-items-center">
      <Image
        width="200px"
        height="200px"
        layout="intrinsic"
        src={planetImage}
        alt={name}
      />
      {secondPlanetImage && (
        <div className="absolute top-1/2 left-1/3">
          <Image
            width="163px"
            height="199px"
            src={secondPlanetImage}
            alt={name}
          />
        </div>
      )}
    </div>
  );
};

export default PlanetImageContainer;
