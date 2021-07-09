import React, { useRef } from 'react';

type CompProps = {
  dispatch: ({}) => {};
  mobile: boolean;
};

const ModeSelect = ({ dispatch, mobile }: CompProps) => {
  const modeList = useRef<any>(null);

  const handleMenuClick = (e: React.SyntheticEvent, mode: string) => {
    // e.currentTarget.dataset.ariaSelected = 'true';
    Array.from(modeList.current?.children).forEach((el: any) => {
      if (el.id === e.currentTarget.id) {
        el.dataset.ariaSelected = 'true';
      } else {
        el.dataset.ariaSelected = 'false';
      }
    });
    console.log(modeList.current?.children);
    dispatch({ type: mode });
  };

  return (
    <nav className={`${!mobile ? 'hidden sm:block' : 'sm:hidden block mb-6'} `}>
      <ul
        ref={modeList}
        className="grid grid-cols-3 sm:grid-cols-1 gap-4 cursor-pointer font-spartan font-bold text-xs text-center sm:text-left">
        <li
          id="overview"
          className="sm:px-7 py-3 sm:border sm:border-gray-600 hover:bg-secondary"
          data-aria-selected={false}
          onClick={(e) => handleMenuClick(e, 'overview')}>
          {mobile ? <p>OVERVIEW</p> : <p>01 OVERVIEW</p>}
        </li>
        <li
          id="structure"
          className="sm:px-7 py-3 sm:border sm:border-gray-600 hover:bg-secondary"
          onClick={(e) => handleMenuClick(e, 'internal')}>
          {mobile ? <p>STRUCTURE</p> : <p>02 INTERNAL STRUCTURE</p>}
        </li>
        <li
          id="geology"
          className="sm:px-7 py-3 sm:border sm:border-gray-600 hover:bg-secondary"
          onClick={(e) => handleMenuClick(e, 'geology')}>
          {mobile ? <p>GEOLOGY</p> : <p>03 SURFACE GEOLOGY</p>}
        </li>
      </ul>
    </nav>
  );
};

export default ModeSelect;
