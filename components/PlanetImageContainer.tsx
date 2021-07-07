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
    <div>
      <Image width="200px" height="200px" src={planetImage} alt={name} />
      {secondPlanetImage && (
        <Image
          width="200px"
          height="200px"
          src={secondPlanetImage}
          alt={name}
        />
      )}
    </div>
  );
};

export default PlanetImageContainer;
