import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MoviesList from './components/MoviesList';

import './App.css'


class App extends React.Component {
  state={
    movies: []
  }

  // handleSearchMovies = () => {
  //   this.setState({ movies :  })
  // }

  render() {
    return (
      <div className="headDiv">
        <Header />
        <SearchBar />
        <MoviesList />
      </div>
    );
  }
}
  

export default App;
