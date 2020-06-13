import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './Yellow.css';

function App({ name, age }) {
  return <div>
    Hi! <strong>{name}</strong> Your age is {age + 10}
    <h1 className='mycolor'>Activities</h1>
    <ul>
      <li>Swimming</li>
      <li>Table Tennis</li>
    </ul>
    <h2>Food</h2>
    <ol>
      <li>Karahi</li>
      <li>Rice</li>
    </ol>

  </div>
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
