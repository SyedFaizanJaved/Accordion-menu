import React from 'react';
import Accordion from './Accordion';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">FAQ Accordion</h1>
      </header>
      <main className="p-4">
        <Accordion />
      </main>
    </div>
  );
}

export default App;
