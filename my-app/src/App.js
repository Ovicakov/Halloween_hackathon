import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MoviesList from './components/MoviesList';

import './App.css'


class App extends React.Component {
  state={
    card: []
  }

  handleData = () => {
    this.setState({ card : this.state.data })
  }

  render() {
    return (
      <div className="headDiv">
        <Header />
        <SearchBar data={this.state.data}/>
        {/* <MoviesList /> */}
      </div>
    );
  }
}
  

export default App;
