type CompProps = {
  name: string;
  content: string;
  source: string;
};

const DescriptionContainer = ({ name, content, source }: CompProps) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <h1 className="font-antonio font-medium text-7xl">{name}</h1>
      <p className="font-spartan">{content}</p>
      <span>
        Source:{' '}
        <a href={source} target="blank">
          Wikapedia
        </a>
      </span>
    </div>
  );
};

export default DescriptionContainer;
