import React, { Component } from 'react';
import './App.css';
import ContentCotizaciones from './Components/ContentCotizaciones';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Bolsa de valores
          </h1>
        </header>
        <body className="App-body">
          <h1>
            Contenido
          </h1>
          <ContentCotizaciones />
        </body>
        <footer className="App-footer">
          <h1>
            Florencia Espeche - Abril 2019
          </h1>
        </footer>
      </div>
    );
  }
}

export default App;
