import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'


import './App.css'


class App extends React.Component {
  state={
    movies: []
  }

  handleSearchMovies = (data) => {
    this.setState({ movies : data })
  }

  render() {
    return (
      <div className="headDiv">
        <Header />
        <SearchBar searchMovies={this.handleSearchMovies} />
      </div>
    );
  }
}
  

export default App;
