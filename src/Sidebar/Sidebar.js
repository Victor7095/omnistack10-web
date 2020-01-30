import React, { useState, useEffect } from "react";

import "./Sidebar.css";

function Sidebar({onSubmit}){
    
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error =>{
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e){
    e.preventDefault();
    const dev = {github_username, techs, latitude, longitude};
    
    await onSubmit(dev);

    setGithubUsername("");
    setTechs("");
  }

  return (
    <aside>
      <strong>Cadastrar</strong>
      <form>
        <div className="input-block">
          <input 
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)} 
            name="github_username" 
            id="github_username" 
            required></input>
          <label htmlFor="github_username">Usuário do Github</label>
        </div>
          
        <div className="input-block">
          <input
            value={techs}
            onChange={e => setTechs(e.target.value)} 
            name="techs"
            id="techs"
            required>
          </input>
          <label htmlFor="techs">Tecnologias</label>
        </div>

        <div className="input-group">
          <div className="input-block">
            <input 
              value={latitude}
              onChange={e => setLatitude(e.target.value)} 
              type="number"
              name="latitude"
              id="latitude"
              required>
            </input>
            <label htmlFor="latitude">Latitude</label>
          </div>
          
          <div className="input-block">
            <input
              value={longitude}
              onChange={e => setLongitude(e.target.value)} 
              type="number"
              name="longitude"
              id="longitude"
              required>
            </input>
            <label htmlFor="longitude">Longitude</label>
          </div>
        </div>

        <button type="submit" onClick={handleSubmit}>Salvar</button>
      </form>
    </aside>
  );
}

export default Sidebar;