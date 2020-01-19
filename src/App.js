import React from 'react';
import "./global.css";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

function App() {
  return (
    <div id="app">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  );
}

export default App;
