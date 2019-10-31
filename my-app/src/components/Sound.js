inport React from 'react'

class Sound extends Component {
    render() {
  
      var audio = new Audio("./fouet.mp3")
  
      return (
        <Container>
              <img src={dwight} onClick={ audio.play() }/>
        </Container>
      );
    }
  }
  
  export default Sounds