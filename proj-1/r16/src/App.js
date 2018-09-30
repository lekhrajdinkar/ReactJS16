import React, { Component } from 'react';
import './App.css';
import User from './first_comp/first_component'

// 1. Extend component
class App1 extends Component {
  // 2. Component state
  state = {
    users: [{ name: 'lekhraj', age: 27 }, { name: 'Manish Bobde', age: 28 }],
    users2: [{ name: 'Himanish', age: 30 }, { name: 'Varun', age: 30 }],
    reactv: '16',
    open: true,
    showUserList2: true
  };



  // ------ A. Template ------
  //2.JSX, not html. looks like html, get trascompiled into JS
  render() {
    //---- js
    let userlist2 = null;

    if (this.state.showUserList2) {
      userlist2 = (
        <div>
          {
            // Iterate over Users2, no ngFor like angular pure JS.
            this.state.users2.map(
              (eachUser, index) => { 
                return 
                <User 
                name={eachUser.name} 
                age={eachUser.age} 
                twoWayBind_2={ (event) => {this.event2_method(event, index)} } 
                /> 
            }
            )
          }
        </div>
      );
    }

    //------jsx
    return (
      <div className="App">

        <header>
          <h1 className="App-title">React, version : {this.state.reactv}</h1>

          <button className="btn-green" onClick={this.toggle_method}>toggle buttons - using ternary opr</button><br></br>

          {
            // Conditional show button using ternery opartor - no ngIf like angular pure JS
            this.state.open === true ?
              <div>
                <button onClick={this.button1_method}>change react version 1</button><br></br>
                <button onClick={this.button2_method.bind(this, '16_v2')}>change react version 2</button><br></br>
              </div> : null
          }

          <button onClick={() => this.button2_method('16_v2')}>change react version 3</button><br></br>

          <User> hello - between comp1 tag </User> {/* props.children*/}


          <br></br><h1 className="App-header"> Iterate over Users 1 - hardcoded no iteration. </h1>
          {/* user 1*/} <User name={this.state.users[0].name} age={this.state.users[0].age} click1={this.event0_method} />
          {/* user 2*/} <User name={this.state.users[1].name} age={this.state.users[1].age} twoWayBind={this.event1_method} />

          <br></br><h1 className="App-header"> Iterate over Users2, no ngFor like angular. React is pure JS. </h1>
          <button className="btn-blue" onClick={this.toggle_userList2_method}>toggle users list 2 </button><br></br>
          
          {userlist2}

        </header>
      </div>
    );


  }

  // ---------B. COMPONENT ---------------------

  // 3. Pass method ref - when "change react version button" is clicked - App comp PARENT
  button1_method = () => {
    console.log("button 1 clicked without arg.");
    this.setState({ reactv: '16_v1' });
  }
  button2_method = (arg) => {
    console.log("button 2 clicked with arg : " + arg);
    this.setState({ reactv: '16_v1' });
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
    this.setState({
      users: [{ name: event.target.value, age: 27 }, { name: event.target.value, age: 28 }]
    })
  }

  // For User List2 : update list state with new enter name
  event2_method = (event, index) => {
    console.log("eeeee")
    //  a. get user by index
    const userIndex = this.state.users2.findIndex(  (i) => { return i.id === index; }   );

    // b. get user
    const user_new = { ...this.state.users2[userIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    user_new.name = event.target.value;

    // c.chaage name came from input text feild
    const users2 = [...this.state.users2];

    // d.set into original array
    users2[userIndex] = user_new;

    // e.changeState
    this.setState( {users2: users2} )
        
  }

  // 6. Conditionally hide. 
  toggle_method = () => {
    const toggle = this.state.open;
    this.setState({ open: !toggle })
  }

  toggle_userList2_method = () => {
    const toggle = this.state.showUserList2;
    this.setState({ showUserList2: !toggle })
  }

}

export default App1;
