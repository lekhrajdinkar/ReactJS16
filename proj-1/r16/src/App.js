import React, { Component } from 'react';
import './App.css';
import User from './first_comp/first_component'

// 1. Extend component
class App1 extends Component {
 // 2. Component state
 state = {
  users: [ { name: 'lekhraj', age: 27 },    { name: 'Manish Bobde', age: 28 } ],
  reactv: '16'
}

// 3. Pass method ref - when "change react version button" is clicked - App comp PARENT
button1_method = () => {
  console.log("button 1 clicked without arg");
  //this.setState(this.reactv = '16_v1');
}
button2_method = (arg) => {
  console.log("button 2 clicked with arg" + arg);
  //this.setState(this.reactv = '16_v1');
}

// 4.1 Pass method ref - when user1 is clicked - User Comp - Children - Addional step: pass method in props.Click1
event0_method = () => {
  console.log("event0");
}

// 4.2 Pass method ref (with agr) - when user2 is clicked - User Comp - Children - Addional step: pass method in props.Click1
// event0_1_method = (name_agr) => {
//   console.log("event0_1:"+name_agr);
// }

//5. when enter text
event1_method = (event) => {
  console.log("event1 caught" + event)
  this.setState( {
    users: [ { name: event.target.value, age: 27 },    { name: event.target.value , age: 28 } ]
  } )
}
//1.1 render
  render() {
    return (
      <div className="App">
      {/* 2. JSX, not html. looks like html, get trascompiled into JS. */}
        <header className="App-header">
        
        <button onClick={this.button1_method()}>change react version</button>
        <button onClick={this.button2_method(this,'arglekhraj')}>change react version</button>

        <h1 className="App-title">React 16 _ Demo App</h1>

        <User> hello - between comp1 tag </User> {/* props.children*/} 

         {/* user 1*/} <User name={this.state.users[0].name} age={this.state.users[0].age} click1={this.event0_method}/>
         {/* user 2*/} <User name={this.state.users[1].name} age={this.state.users[1].age} />
     
        </header>      
      </div>
    );
  }
}

export default App1;
