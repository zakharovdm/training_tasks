import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHanlder = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph)
  }, []);

  console.log("app running")

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHanlder}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
