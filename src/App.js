import React, {useState, useEffect} from 'react';
import axios from "axios";

import "./global.css";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs(){
      const response = await axios.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(dev){
    const response = await axios.post("/devs", dev);
  }

  return (
    <div id="app">
      <Sidebar onSubmit={handleAddDev}></Sidebar>
      <Main devs={devs}></Main>
    </div>
  );
}

export default App;
