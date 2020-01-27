import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    // in a real application, the options for genders, destinations, and diet would come from somewhere
    this.genders = [
      "Female",
      "Male",
      "Trans Female",
      "Trans Male",
      "Gender Variant/Non-Conforming",
      "Another Gender Not Listed",
      "Prefer Not to Answer"
    ] // from https://www.surveygizmo.com/resources/blog/how-to-write-survey-gender-questions/
    this.destinations = [
      "",
      "Albany",
      "Boston",
      "Cleveland",
      "Detroit",
      "Erie",
      "Fort Myers",
      "Gary",
      "Hilton Head",
      "Irvine",
      "Jacksonville"
    ]  
    this.dietaryOptions = [
      "Kosher",
      "Vegan",
      "Halal",
      "Vegetarian",
      "Pescatarian"
    ]

    // creating an initial list within state keeps the checkboxes "controlled" from the start
    // Here, we create a javascript object with the keys of the dietary options all with values of false as the initial state
    const initialDietaryRestrictions = this.dietaryOptions.reduce(
      (result, option) => ({...result, [option]: false}), 
      {}
    )

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: initialDietaryRestrictions
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      // special case for checkboxes, which are represented by an object
      // For the dietaryRestrictions case, name is "dietaryRestrictions" and value is the particular key (one of the dietary options)
      this.setState(currState => ({
        [name]: { ...currState[name], [value]: checked } 
      }))
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit() {
    // nothing for now
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleClick}
          />
          <br />
          <input
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleClick}
          />
          <br />
          {/* Age should probably restrict to numbers */}
          <input
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleClick}
          />
          <br /><br />
          <label>To which gender identity do you most identify?</label>
          <br />
          {/* create the list of radio buttons from the provided gender options */}
          {this.genders.map(gender => (
            <label key={gender}>
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={this.state.gender === gender}
                onChange={this.handleClick}
              />
              {gender} <br />
            </label>
          ))}
          <br />
          {/* create the list of pull-down options from the provided destination options */}
          <label>Select destination:</label>
          <select
            value={this.state.destination}
            onChange={this.handleClick}
            name="destination"
          >
            {this.destinations.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <br /><br />
          Dietary Preferences (check all that apply): <br />
          {/* create the checkboxes from the provided dietary options */}
          {this.dietaryOptions.map(option => (
            <label key={option}>
              <input
                type="checkbox"
                value={option} // we use value to tell 'handleClick' which key to change
                name="dietaryRestrictions"
                checked={this.state.dietaryRestrictions[option]} // we change the specific key within the dietaryRestrictions object
                onChange={this.handleClick}
              />
              {option}
              <br />
            </label>
          ))}
          <br /><br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:&nbsp;
          {/* create the list dietary options selected. Filter the keys of the dietaryRestrictions object for the ones whose state is 'true' */}
          {Object.keys(this.state.dietaryRestrictions).filter(key => this.state.dietaryRestrictions[key]).join(", ")}
        </p>
      </main>
    );
  }
}

export default App
