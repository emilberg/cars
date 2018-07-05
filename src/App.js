import React, { Component } from 'react'; 

import store from './store/store';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import CarList from './containers/CarList/CarList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header title="Carlist" subTitle="application" />
        <Search store={store} />
        <CarList store={store} />
      </div>
    );
  }
}

export default App;
