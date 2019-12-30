import React from 'react'

function Joke({question, punchline}) {
    return (
        <div className="joke-item">
            <p>{question ? 'Question:': ''} {question}</p>
            <p>Punchline: {punchline}</p>
        </div>
    )
}



export default Joke