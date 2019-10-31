import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MonsterList from './components/MonsterList'

import './App.css'


class App extends React.Component {
  state={
    movies: [],
    clicked: false
  }

  handleSearchMovies = (data) => {
    this.setState({ movies : data })
  }

  handleClickedField = () => {
    this.setState({ clicked : !this.state.clicked})
  }

  render() {
    console.log('app' ,this.state);
    
    return (
      <div className="headDiv">
        <Header />
        <MonsterList clicked={this.state.clicked}/>
        <SearchBar searchMovies={this.handleSearchMovies} clickedField={this.handleClickedField}/>

      </div>
    );
  }
}
  

export default App;
