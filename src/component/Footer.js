import React, { useContext } from 'react';
import { DarkContext } from '../context/DarkContext';

const Footer = () => {
  const { isDark, setIsDark } = useContext(DarkContext);
  const change = () => {
    setIsDark(!isDark);
  };
  return (
    <div>
      <div
        className="footer"
        style={{
          backgroundColor: isDark ? 'black' : 'white',
          color: isDark ? 'white' : 'black',
        }}
      >
        Footer
      </div>
      <button className="button" onClick={change}>
        다크모드
      </button>
    </div>
  );
};

export default Footer;
