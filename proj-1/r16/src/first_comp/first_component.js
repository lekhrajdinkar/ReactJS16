import React from 'react';
import './user.css';

//const Comp1 = () => { return <p> first component </p>; }
const User = (props) => {
    return (
        <div className="user-card">

            {/* 1. pass attribute and inndrhtml text */}
            <p onClick={props.click1}> User component - name : {props.name}, age : {props.age} , {props.children} </p>

            {/* 
            2. 2 way binding - pass data from User (this comp) to comp2(app.js)
            3. onChange="{props.event1}" - use event1 in app.js
            4. value={props.name} 
            */}
            <input type="text" onChange={props.twoWayBind_2}/>
            {/* {props.name} */}

        </div>
    );
}

export default User;