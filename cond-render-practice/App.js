import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {
    constructor() {
        super()
        this.state = {isLoggedIn: false}
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => ( { isLoggedIn: !prevState.isLoggedIn } ))
    }
    
    render() {
        return (
            <div className="container">
                {this.state.isLoggedIn ? "Logged In!" : "Not Logged In!"}
                <button onClick={this.handleClick}>Click to {this.state.isLoggedIn ? "Log Out" : "Log In"}</button>
        </div>
        )
    }
}

export default App
