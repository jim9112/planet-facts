import React, { useEffect, useRef, useState } from 'react';

type CompProps = {
  dispatch: ({}) => {};
  mobile: boolean;
  planetName: string;
  currentMode: string;
  setCurrentMode: (currentMode: string) => void;
};

const ModeSelect = ({
  dispatch,
  mobile,
  planetName,
  currentMode,
  setCurrentMode,
}: CompProps) => {
  const modeList = useRef<any>(null);
  // toggle styles of mode menu based on selection
  const setSelectedStyles = () => {
    console.log(currentMode);
    Array.from(modeList.current?.children).forEach((el: any) => {
      if (el.id === currentMode) {
        el.classList.add(
          'border-b',
          `border-${planetName.toLowerCase()}`,
          `sm:bg-${planetName.toLowerCase()}`,
          'sm:border-b-0'
        );
      } else {
        el.classList.remove(
          'border-b',
          `border-${planetName.toLowerCase()}`,
          `sm:bg-${planetName.toLowerCase()}`,
          'sm:border-b-0'
        );
      }
    });
  };

  // event handler for mode menu click
  const handleMenuClick = async (e: React.SyntheticEvent, mode: string) => {
    setCurrentMode(e.currentTarget.id);
    dispatch({ type: mode });
  };

  // sets mode menu styles on mode change
  useEffect(() => {
    setSelectedStyles();
  }, [currentMode]);

  // reset styles on planet change
  useEffect(() => {
    // reset each li style to base style
    Array.from(modeList.current?.children).forEach((el: any) => {
      el.className =
        'sm:px-7 py-3 sm:border sm:border-gray-600 hover:bg-secondary';
    });
    setCurrentMode('overview');
  }, [planetName]);

  return (
    <nav className={`${!mobile ? 'hidden sm:block' : 'sm:hidden block mb-6'} `}>
      <ul
        ref={modeList}
        className="grid grid-cols-3 sm:grid-cols-1 gap-4 cursor-pointer font-spartan font-bold text-xs text-center sm:text-left">
        <li
          id="overview"
          className="sm:px-7 py-3 sm:border sm:border-gray-600 hover:bg-secondary"
          data-aria-selected={true}
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
