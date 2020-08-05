import React from 'react';
import './App.css';
import TaskManager from './components/TaskManager/TaskManager';
import Header from '../src/components/shared/Header/Header'
import Footer from '../src/components/shared/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskManager/>
      <Footer/>
    </div>
  );
}

export default App;
