## Components

### JSX
1. JSX defines which HTML code React should render to the real DOM in the end.
2. JSX is NOT HTML
3. `className` - not class 
***

### Features
1. Each component needs to return/render some JSX code.

***

### Type
#### Functional components 
- also referred to as "presentational", "dumb" or "stateless" components.
- `const cmp = () => { return <div>some JSX</div> }`

#### class-based components 
- also referred to as "containers", "smart" or "stateful" components
- `class Cmp extends Component { render () { return <div>some JSX</div> } } `

***
### Rendering :
1. `setState()` is called, it marks the component as dirty.
2. `render()` method is called and returns a new `virtual DOM structure` of the component.
3. React changes `real DOM nodes` only if there is difference in Virtual DOM.



