import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainApp from "./NewApp";

function App() {
  const app = new MainApp({});
  return (
   app.render()
  );
}

export default App;
