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
    <div className="relative grid place-items-center mb-5">
      <Image
        width="200px"
        height="200px"
        layout="intrinsic"
        src={planetImage}
        alt={name}
      />
      {secondPlanetImage && (
        <div className="absolute top-1/3 sm:top-1/2 left-1/3 w-28 h-36">
          <Image layout="fill" src={secondPlanetImage} alt={name} />
        </div>
      )}
    </div>
  );
};

export default PlanetImageContainer;
