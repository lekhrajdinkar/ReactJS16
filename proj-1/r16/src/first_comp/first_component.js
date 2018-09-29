import React from 'react';

//const Comp1 = () => { return <p> first component </p>; }
const Comp1 = (props) => <p> first component - arg 1 : {props.arg1}, innerHTML : {props.children} </p>;

export default Comp1 ;