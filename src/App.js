import React, {useState, useEffect} from 'react';
import api from "./services/api";

import "./global.css";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(dev){
    const response = await api.post("/devs", dev);
  }

  return (
    <div id="app">
      <Sidebar onSubmit={handleAddDev}></Sidebar>
      <Main devs={devs}></Main>
    </div>
  );
}

export default App;
