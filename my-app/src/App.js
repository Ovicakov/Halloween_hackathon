import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MoviesList from './components/MoviesList';

import './App.css'


function App() {
  return (
    <div className="headDiv">
      <Header className="header"/>
      <SearchBar className="searchBar"/>
      <MoviesList />
    </div>
  );
}

export default App;
