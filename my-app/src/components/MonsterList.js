import React from 'react'
import './Monster'

class MonsterList extends React.Component {
    state =  {
        monsters : [],
      }
      
      getMonster = () => {
        axios
          .get('https://hackathon-wild-hackoween.herokuapp.com/monsters') 
          .then(res => this.setState({monsters : res.data.monsters}))
      }
    
      componentDidMount = () => {
        this.getMonster ()
      }
    
      render () {
        return(
          <div className ="App"> 
            <div className="monster"> 
              {this.state.monsters.map(
              monster =>( <CardMovie monster={monster.picture} key={monster.id} /> ))}
            </div>
          </div>
        )
      }
    }

    export default MonsterList