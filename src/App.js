import logo from './logo.svg';
import './App.css';
import { createRef, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Page from './page/Page';
import { DarkContext } from './context/DarkContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <DarkContext.Provider value={{ isDark, setIsDark }}>
        <Page isDark={isDark} setIsDark={setIsDark} />
      </DarkContext.Provider>
    </div>
  );
}

export default App;
