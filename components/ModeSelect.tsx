type CompProps = {
  dispatch: ({}) => {};
};

const ModeSelect = ({ dispatch }: CompProps) => {
  return (
    <nav>
      <ul className="grid grid-cols-1 gap-4 cursor-pointer font-spartan font-bold text-xs">
        <li
          className="px-7 py-3 border border-gray-600 hover:bg-gray-600"
          onClick={() => dispatch({ type: 'overview' })}>
          01 OVERVIEW
        </li>
        <li
          className="px-7 py-3 border border-gray-600 hover:bg-gray-600"
          onClick={() => dispatch({ type: 'internal' })}>
          02 INTERNAL STRUCTURE
        </li>
        <li
          className="px-7 py-3 border border-gray-600 hover:bg-gray-600"
          onClick={() => dispatch({ type: 'geology' })}>
          03 SURFACE GEOLOGY
        </li>
      </ul>
    </nav>
  );
};

export default ModeSelect;
