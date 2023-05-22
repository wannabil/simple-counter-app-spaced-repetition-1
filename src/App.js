import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [counter, setCounter] = useState(0);

function increaseCounter() {
  setCounter(counter + 1);
}

function decreaseCounter() {
  setCounter(counter - 1);
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>Simple Counter App 1</h2>

        <p>You will build a simple React App which increment/decrements count on-screen when buttons are clicked using React State.element</p>
        <p>{counter}</p>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
