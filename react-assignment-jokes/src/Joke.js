import React from 'react'
import '../style.css'

function Joke({question, punchLine}) {
    return (
        <div className="joke-item">
            <p>{question ? 'Question:': ''} {question}</p>
            <p>PunchLine: {punchLine}</p>
        </div>
    )
}



export default Joke