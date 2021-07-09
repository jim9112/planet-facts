type CompProps = {
  name: string;
  content: string;
  source: string;
};

const DescriptionContainer = ({ name, content, source }: CompProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 text-center sm:text-left">
      <h1 className="font-antonio font-medium text-4xl sm:text-5xl lg:text-7xl">
        {name}
      </h1>
      <p className="font-spartan text-xs lg:text-sm lg:leading-6 leading-6">
        {content}
      </p>
      <span>
        Source:{' '}
        <a href={source} target="blank">
          Wikipedia
        </a>
      </span>
    </div>
  );
};

export default DescriptionContainer;
