import React from 'react';
import '../App.css';
import MainApp from "./NewApp";

function App() {
  const app = new MainApp({});
  return (
   app.render()
  );
}

export default App;
