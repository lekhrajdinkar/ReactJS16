## EVENTS
[https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)

### A. Update Internal state on click of button
1.  Define handleClick method in Component
```
this.state = {isToggleOn: true}

handleClick() {
    //call setState method to update state > it recieves callback
    this.setState((state)=> ({  isToggleOn: !state.isToggleOn  }));
  }

 handleClick() {
    //it wont work
    this.setState({         isToggleOn: !prevState.isToggleOn    });
  }
```
2. Add Button in JSX. 
 `<button onClick={this.handleClick}> </button>`

3. bind:
3.1. Bind in Step 2 it self : `this.handleClick.bind(this)`

3.2 Or Add binding in Contructor :
```
// This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
```    