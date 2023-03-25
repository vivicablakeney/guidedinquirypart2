import "./App.css";
import React from "react";
import BasicInfo from "./component/BasicInfo";
import { render } from "@testing-library/react";

// VERY EASY
// class App extends Component {
//   render(){
//     return(
//     <div className="App">
//       <ul>
//         <li> name: Vivica </li>
//         <li> birthDate: 26</li>
//         <li> occupation: 10</li>
//       </ul>
//     </div>
//     )
//   }
// }

// easy
//super calls properties of parent .. props wont pass to children without super
// class App extends React.Component {
// constructor(props){
//   super(props)
//   this.state = {
//     person: {

//     }
// }
// }
// }

//medium
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        firstName: "Vivica",
        birthDate: "08-13-1999",
        occupation: "Full-Stack Developer",
      },
      people: [
        {
          firstName: "Shaal",
          bithdate: "02-22-1999",
          occupation: "data analyst",
        },
        {
          firstName: "Adriann",
          bithdate: "10-22-1999",
          occupation: "engineer",
        },
        {
          firstName: "bre",
          bithdate: "11-22-1999",
          occupation: "developer",
        },
      ],
    };
  }
  render() {
    const coWorkers = this.state.people.map((people, index) => (
      <div key={index}>
        <BasicInfo person = {people} />
      </div>
    ))
    return (
      <div>
        <BasicInfo person={this.state.person} />
        {coWorkers}
      </div>
    )
  }
}

//hard

export default App;
