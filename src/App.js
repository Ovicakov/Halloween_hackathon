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
    
    return (
      <div className="headDiv">
        <Header className='header'/>
        <MonsterList className='kik' clicked={this.state.clicked}/>
        <SearchBar className='Searchbar' searchMovies={this.handleSearchMovies} clickedField={this.handleClickedField}/>
      </div>
    );
  }
}
  

export default App;
