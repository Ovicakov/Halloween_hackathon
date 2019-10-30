import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  return (
    <div className="headDiv">
      <Header className="header"/>
      <SearchBar className="searchBar"/>
    </div>
  );
}

export default App;
