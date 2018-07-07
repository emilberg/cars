import React, { Component } from 'react'; 

import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import CarList from '../containers/CarList/CarList';
import './App.css';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <Header title="Carlist" subTitle="application" />
        <Search />
        <CarList />
      </div>
    );
  }
}

export default App;
