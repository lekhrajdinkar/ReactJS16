## state Management
1. [Managing state with props and state in component.](https://www.robinwieruch.de/learn-react-before-using-redux/)
2. [lifting-state-up](https://reactjs.org/docs/lifting-state-up.html)

***
## Program
-   passing date from child component to Parent Component.
-   child are statless
-   parent passes the data down as props.
-   parent receives data from child as event data which triggered at child comp. 

![](https://github.com/lekhrajdinkar/ReactJS16/blob/master/proj-1/NOTES/asset/20180930_121152.png)

![](https://github.com/lekhrajdinkar/ReactJS16/blob/master/proj-1/NOTES/asset/20180930_121931.png)
***

### Rendering :
1. `setState()` is called, it marks the component as dirty.
2. `render()` method is called and returns a new `virtual DOM structure` of the component.
3. React changes `real DOM nodes` only if there is difference in Virtual DOM.

***
### Key points:
> 1.  The `this.setState()` method updates the local state **asynchronously**. Thus, you cannot rely on the timing when your state updates.

> 2. [prop are ready only](https://reactjs.org/docs/components-and-props.html#props-are-read-only)
