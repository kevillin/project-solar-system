import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
        <Title headline="Planetas" />
        <PlanetCard />
      </div>
    );
  }
}

export default App;
