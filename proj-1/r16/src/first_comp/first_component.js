import React from 'react';

//const Comp1 = () => { return <p> first component </p>; }
const User = (props) => {
    return (
        <div>

            {/* 1. pass attribute and inndrhtml text */}
            <p onClick={props.click1}> User component - name : {props.name}, age : {props.age} , {props.children} </p>

            {/* 
            2. 2 way binding - pass data from User (this comp) to comp2(app.js)
            3. onChange="{props.event1}" - use event1 in app.js
            4. value={props.name} 
            */}
            <input type="text" onChange={props.twoWayBind} />
            {props.name}

        </div>
    );
}

export default User;