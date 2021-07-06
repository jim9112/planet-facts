export default function Header({ findPlanet }: any) {
  // changes planet on the main screen
  const handleClick = (planetName: string) => {
    findPlanet(planetName);
  };
  return (
    <div className="grid grid-flow-col">
      <h1>Planets</h1>
      <ul className="grid grid-flow-col">
        <li onClick={() => handleClick('Mercury')}>MERCURY</li>
        <li onClick={() => handleClick('Venus')}>VENUS</li>
        <li onClick={() => handleClick('Earth')}>EARTH</li>
        <li onClick={() => handleClick('Mars')}>MARS</li>
        <li onClick={() => handleClick('Jupiter')}>JUPITER</li>
        <li onClick={() => handleClick('Saturn')}>SATURN</li>
        <li onClick={() => handleClick('Uranus')}>URANUS</li>
        <li onClick={() => handleClick('Neptune')}>NEPTUNE</li>
      </ul>
    </div>
  );
}
