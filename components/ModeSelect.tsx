type CompProps = {
  dispatch: ({}) => {};
  mobile: boolean;
};

const ModeSelect = ({ dispatch, mobile }: CompProps) => {
  return (
    <nav className={`${!mobile ? 'hidden sm:block' : 'sm:hidden block mb-6'} `}>
      <ul className="grid grid-cols-3 sm:grid-cols-1 gap-4 cursor-pointer font-spartan font-bold text-xs text-center sm:text-left">
        <li
          className="sm:px-7 sm:py-3 sm:border sm:border-gray-600 hover:bg-gray-600"
          data-aria-selected={false}
          onClick={(e) => {
            e.currentTarget.dataset.ariaSelected = 'true';
            console.log(e.currentTarget.dataset.ariaSelected);
            dispatch({ type: 'overview' });
          }}>
          {mobile ? <p>OVERVIEW</p> : <p>01 OVERVIEW</p>}
        </li>
        <li
          className="sm:px-7 sm:py-3 sm:border sm:border-gray-600 hover:bg-gray-600"
          onClick={() => dispatch({ type: 'internal' })}>
          {mobile ? <p>STRUCTURE</p> : <p>02 INTERNAL STRUCTURE</p>}
        </li>
        <li
          className="sm:px-7 sm:py-3 sm:border sm:border-gray-600 hover:bg-gray-600"
          onClick={() => dispatch({ type: 'geology' })}>
          {mobile ? <p>GEOLOGY</p> : <p>03 SURFACE GEOLOGY</p>}
        </li>
      </ul>
    </nav>
  );
};

export default ModeSelect;
