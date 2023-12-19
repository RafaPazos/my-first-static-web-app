import React from 'react';
import GridLayout from "react-grid-layout";
import About from './About';

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  );
}

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: "c", x: 4, y: 0, w: 1, h: 2 }
];


function App() {
  const value = 'World';
  return (
    <div className="app">
      <h1 className="avatar">Welcome to my app</h1>
      <h2>Hola {value}</h2>
      <MyButton />
      <About />
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
      </GridLayout>
    </div>
  );
}

export default App;
