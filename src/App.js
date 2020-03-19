import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
//Import components
import MyComponent from './components/MyComponent';
function HolaMundo(nombre,edad){
return (
<div>
<h2>Hello, I am {nombre}</h2>
<h3>I am {edad} years old</h3>
</div>)

}
function App() {
  let nombre='Cesar Bermudez Medina'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload 1.
        </p>
        <p>Hello Welcome to react js developed by Cesar Bermudez</p>
          {HolaMundo(nombre,31)}
          <section className="components">
            <MyComponent/>
          </section>
      </header>
     
    </div>
  );
}

export default App;
