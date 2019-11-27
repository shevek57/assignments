import React from 'react'
import Joke from './Joke'
import '../style.css'

function App() {
    return (
      <div className="joke-list">
        <Joke question='How many programmers does it take to screw in a lightbulb?' punchLine="None. It's a hardware problem" />
        <Joke question="What do you call a developer that never comments their code?" punchLine="A developer" />
        <Joke punchLine='Java expresses the beauty of Smalltalk through the syntax of C' />
      </div>
    );
}

export default App