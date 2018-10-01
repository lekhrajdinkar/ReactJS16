import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component 
{
   // 1. STATE - Not going to use it now. As it can be internally manipulated by Component locally.
   // state = { counter: 0  }

    render () {
        return (
            //2. PARENT Coponent template
            <div>
                {/* 2.1. this child component shows COUNTER Count*/}
                <CounterOutput value={this.props.ctr} /> 
                {/* 2.2. This Child component increments the COUNTER */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
            </div>
        );
    }
}

// 3. CONNECT this component(Counter.js) to REDUX STORE (part of Store)
// specfic ACTION - this component will DISPATCH - Configure in 1st arg -  mapStateToProps
// Specific STATE - this component will get from STORE - Configure in 12nd arg -  mapDispatchToProps 

// note: `state` of Component Class can be manipulated interanally and props are READ only.
// therefore we map STORE-STATE and ACTION(to be dispatched) with PROPS. 
// so PROPS will have reference to state-object-ref and dispatch-method-ref

//3.1. ----------------------------------
// arg `state` is object-ref to APPL STATE stored in REDUX store. 
// this.props.ctr = maped with = part of REDUX STORE

const mapStateToProps = (state) => {
    //return OBJECT having properties store in REDUX STORE
    return { ctr: state.counter };
};

//3.2. ----------------------------------
// arg `dispatch` is method-ref to `R`EDUX-STORE.dispatch` method. 
// this.props.onIncrementCounter  - this method-ref will be used by this component 
//to dispatch INCREMENT Action on Redux Store

const mapDispatchToProps = (dispatch) => {
    //return OBJECT, having method reference to STORE.dispatch method with different ACTIONs type and payloads
    return {   onIncrementCounter: () => dispatch({type: 'INCREMENT'}) 
               //, dispatch_1_Ref : () => dispatch({type: 'ACTION_1' payload: 'data1'}) 
               //, dispatch_2_Ref : () => dispatch({type: 'ACTION_2' payload: 'data2'})   
            };
};

//3.3 Connect finally
export default connect(mapStateToProps, mapDispatchToProps)(Counter);