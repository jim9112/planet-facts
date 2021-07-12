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
    <div className="grid place-items-center">
      <div className="relative mb-5 w-52 h-52">
        <Image layout="fill" src={planetImage} alt={name} />
        {secondPlanetImage && (
          <div className="absolute top-1/3 sm:top-1/2 left-1/3 w-28 h-36">
            <Image layout="fill" src={secondPlanetImage} alt={name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanetImageContainer;
