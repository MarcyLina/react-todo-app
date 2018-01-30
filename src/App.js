import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';
import './index.css';




class App extends Component {
      render() {
        return (
          <div className="App">
            <Header/>
             { MyRoutes }
            <h1>Hola Mundo </h1>
          </div>
        );
      }
    }


export default App;
