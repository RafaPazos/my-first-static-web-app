import React from 'react';

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

function App() {
  const value = 'World';
  return (
    <div>
      <h1>Welcome to my app</h1>
      <h2>Hola {value}</h2>
      <MyButton />
    </div>
  );
}

export default App;
