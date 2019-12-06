import React from 'react'
import Joke from './Joke'
import './App.css'
import axios from 'axios';



class App extends React.Component {
  constructor() {
    super()
    this.state={jokes: []}
  }

   generateJoke (jokeJSON) {
    return jokeJSON.type === "twopart" ? <Joke key={jokeJSON.id} question={jokeJSON.setup} punchline={jokeJSON.delivery} />
                                           : <Joke key={jokeJSON.id} punchline={jokeJSON.joke} />
  }
  
  
  // componentDidMount() {
  //   const jokes = [1,2,3,4,5].map(async function(item) {
  //     const res = await axios.get("https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw&religious&political")
  //     return res.data
  //   })
  //   this.setState({jokes: jokes})
  // }

  async componentDidMount () {
    let res;
    for (let i=0; i<5; i++) {
      res = await axios.get("https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw&religious&political")
      this.setState(currState => ({jokes: [...currState.jokes, res.data]}))
    }
  }

  render() {
    return (
      <div className="joke-list">
        {this.state.jokes.map(joke => this.generateJoke(joke))}
      </div>
    );
  }
}


export default App