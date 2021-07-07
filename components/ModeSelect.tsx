type CompProps = {
  dispatch: ({}) => {};
};

const ModeSelect = ({ dispatch }: CompProps) => {
  return (
    <nav>
      <ul className="cursor-pointer">
        <li onClick={() => dispatch({ type: 'overview' })}>01 OVERVIEW</li>
        <li onClick={() => dispatch({ type: 'internal' })}>
          02 INTERNAL STRUCTURE
        </li>
        <li onClick={() => dispatch({ type: 'geology' })}>
          03 SURFACE GEOLOGY
        </li>
      </ul>
    </nav>
  );
};

export default ModeSelect;
