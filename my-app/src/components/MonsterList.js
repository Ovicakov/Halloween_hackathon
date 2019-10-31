import React from 'react'
import axios from 'axios'
import CardMonster from './CardMonster'
import  './MonsterList.css'
import './Monster'

class MonsterList extends React.Component {
    state =  {
        monsters : [],
        random : {},
        clicked : false
      }
      
      getMonster = () => {
        axios
          .get(`https://hackathon-wild-hackoween.herokuapp.com/monsters`) 
          .then((res) => {
          this.setState({monsters : res.data.monsters}, _=>{
            this.randomMonster()
          })
        })
      }

      randomMonster = () => {
        const max = this.state.monsters.length
        const random = Math.floor(Math.random() * (max))
        const randomMonster = this.state.monsters[random]
        console.log('r',random);
        this.setState({random : randomMonster})
      }

      componentDidMount = () => {
        this.getMonster ()
      }

      componentDidUpdate() {
        
        if (this.props.clicked != this.state.clicked) {
          console.log('update', this.props.clicked, this.state.clicked);
          this.setState({
            clicked : !this.state.clicked
          })
          this.randomMonster()
        }
      }
    
      render () {
        return(
          <div className ="App"> 
            <div className="monster"> 
        {this.state.monsters.length ? <CardMonster monster={this.state.random}/> : <p> Allo?</p>}
            </div>
          </div>
        )
      }
    }

    export default MonsterList