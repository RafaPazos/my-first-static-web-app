import React from 'react';

function MyButton() {
  return (
    <button>
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
