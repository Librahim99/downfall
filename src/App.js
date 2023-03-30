import React, { useState } from 'react'
import "./App.css";
import Slides from './Slides';

function App() {
  const [section, setSection] = useState('menu')
  return (

    <div> 
      {section === 'menu' ? 
      <div>
        <img className="image" src='https://i.imgur.com/ILB3ubQ.jpg' alt='asdasd'></img>
        <button className="goToSlide" onClick={() => setSection('slide')}>Continuar</button>
      </div> 
      : null}

      {section === 'slide' ? <Slides setSection={setSection} ></Slides> : null}

      {section === 'final' ? 
      <div>
        <img className="image" src='https://i.imgur.com/ILB3ubQ.jpg' alt='asdasd'></img>
        <button className="goToSlide">Continuar</button>
      </div> 
      : null}

    </div>

  );
}

export default App;
