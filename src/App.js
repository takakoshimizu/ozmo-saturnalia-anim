import React, { Component } from 'react';
import Floater from './Floater';
import './App.css';

import O from './images/o.png';
import Z from './images/z.png';
import M from './images/m.png';
import O2 from './images/o2.png';
import bg from './images/bg.gif';

class App extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url(${bg})`;
  }

  render() {
    return (
      <div className="App"> 
        <Floater src={O} top="30px" left="10px" />
        <Floater src={Z} top="25px" left="350px" />
        <Floater src={M} top="50px" left="480px" />
        <Floater src={O2} top="35px" left="700px" />
      </div>
    );
  }
}

export default App;
