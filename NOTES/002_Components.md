## [Components](https://reactjs.org/docs/components-and-props.html)

1. split the UI into independent and reusable pieces.
2. Custom, reusable HTML elements.
3. data is stored and handled, using state and props

### JSX 
> Js + XML, react uses JSX for template whick looks like Html but are XML and gets tranformed into javaScript after rendering.
1. JSX defines which HTML code React should render to the real DOM in the end.
2. Follows camelin format. eg: `onClick`, not `onclick`
3. `class` is reserved keyword hence uses `className`.
4. `return (<div> ... </div>);` - only one root element.
5. `<react1> abc </react1>` : `abc` will be accessible in `props.children`
6. state and props are special properties of Component Class and their values get changed then react will rerender Virtual DOM.
***

### Type
#### Functional components 
- Also referred to as "presentational", "dumb" or "stateless" components.
- `const cmp = () => { return <div>some JSX</div> }`
- purpose : to rendered dynamic content and no does maintain state.

#### class-based components 
- Also referred to as "containers", "smart" or "stateful" components
- `class Cmp extends Component { render () { return <div>some JSX</div> } } `
- can be stateless or stateful.

***
### Rendering:
1. `setState()` is called, it marks the component as dirty.
2. `render()` method is called and returns a new `virtual DOM structure` of the component.
3. React changes `real DOM nodes` only if there is difference in Virtual DOM.

### Component communications
1. [state and props](https://github.com/lekhrajdinkar/ReactJS16/blob/master/proj-1/NOTES/002_state_and_props.md)
2. send input to component and acces it via `this.proc` (Props are Read-Only).
3. parent to child, child to parent, among siblings.
4. `lift up state` in parent and event in child to manipulate state in Parent.



