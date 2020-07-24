import React from 'react';
import './App.css';

// components
import Navbar from './components/Navbar/Navbar'
import TimelineContainer from './components/Timeline/TimelineContainer';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <TimelineContainer/>

      <div className="footer"> created for fun and learning by Jason Melton</div>
    </div>
  );
}

export default App;
