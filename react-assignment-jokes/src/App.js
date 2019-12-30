import React from 'react'
import Joke from './Joke'
import '../style.css'
import axios from 'axios';



class App extends React.Component {
  constructor() {
    super()
    this.state={jokes: []}
  }

   generateJoke (jokeJSON) {
    return jokeJSON.type === "twopart" ? <Joke question={jokeJSON.setup} punchline={jokeJSON.delivery} />
                                           : <Joke punchline={jokeJSON.joke} />
  }
  
  componentDidMount () {
    fetch("https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw&religious&political").then(res => console.log(res))
    // .then(res => {
    //   console.log(res);
    //   console.log('here')
    //   this.setState(currState => {jokes: [...currState.jokes, res.json()]})
    // })
      
  }

  render() {
    return (
      <div className="joke-list">
        {/* {this.state.jokes.map(joke => this.generateJoke(joke))} */}
        here
      </div>
    );
  }
}

// import React from 'react';
// import axios from 'axios';
// import './App.css';
// import Joke from "./joke";

// class App extends React.Component{

//   constructor(props){
//     super(props)
//     this.state={
//       question:"Programming",
//       punchline:"Your momma is so fat, we had to switch to NTFS to store her."
//     }
//   }

//   async componentDidMount(){
//     const res = await axios.get("https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw&religious&political");
//     console.log(JSON.stringify(res))
//     this.setState({
//       question:res.data.setup |res.data.delivery|res.data.category| this.state.question,
//       punchline: res.data.joke | res.data.delivery |res.data.category | this.state.punchline
//     })
//   }

//   render(){
//     return (
//       <div className="App">
//         <Joke question={this.state.question} punchline={this.state.punchline} />
//         <Joke question={this.state.question} punchline={this.state.punchline} />
//         <Joke question={this.state.question} punchline={this.state.punchline} />
//         <Joke question={this.state.question} punchline={this.state.punchline} />
//         <Joke question={this.state.question} punchline={this.state.punchline} />
//         <Joke question={this.state.question} punchline={this.state.punchline} />
//         <Joke question={this.state.question} punchline={this.state.punchline} />
//         <Joke question={this.state.question} punchline={this.state.punchline} />
//       </div>
//     );
//   }
// }

export default App