## LIFE CYCLE of Component (Class Comp)

### 1. Create Component
> 1. Constructor - instantiate Comp. `set initial State` 
> 2. ComponentWillMount - Before adding Compo in Virtual Dom. No one use it but still there becoz of some historic reason. `Update State if needed.`
> 3. render() - update virtual DOM, also renders Child.
> 4. ComponentDidMount - After Adding component in virtual DOM - `Dont update state / prop here` --> it will call render() - hence performance issue.

![img](https://onedrive.live.com/?cid=4A629DADD0936F0A&id=4A629DADD0936F0A%215355&parId=4A629DADD0936F0A%215353&o=OneUp)

Life Cycle method exist only for Class Comp as they extends Component class and overrides its life cycle method
![img](https://onedrive.live.com/?cid=4A629DADD0936F0A&id=4A629DADD0936F0A%215359&parId=4A629DADD0936F0A%215353&o=OneUp)

### 2. Update Component. 
- State is changed
- Recieved new Props from parent.
![img](https://onedrive.live.com/?cid=4A629DADD0936F0A&id=4A629DADD0936F0A%215361&parId=4A629DADD0936F0A%215353&o=OneUp)

- State is changed
![img](https://onedrive.live.com/?cid=4A629DADD0936F0A&id=4A629DADD0936F0A%215364&parId=4A629DADD0936F0A%215353&o=OneUp)

![img]()