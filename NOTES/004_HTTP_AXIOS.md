# About AXIOS
- 3rd part library to process http request in any JS project
- Promise based HTTP client.
- [axios NPM package - more](https://www.npmjs.com/package/axios)

# Features
1. ComponentDidMount() : best place to invoke http request.

***
# EXAMPLES
### 1. GET
- it uses promises to handle response asynchronously. 

`note` : first invoke the service in browser and check JSON response.
```
ComponentDidMount() {
...
axios.get('/user?ID=12345')
  .then(function (response) {    this.setState({posts=response.data})  })
  .catch(function (error) {    console.log(error);  });
...
}
```
once state is changed render() will get invoked.
```
render(){
//1. show first 4 posts only.
const posts = this.state.posts.slice(0,4); 

//2. transform data - add Author as well.
posts = posts.map(post => {return {...post, author:'lekhraj'}})

//3. iterate <POST> and pass down data.
posts.map(post => { <post title={post.title} content={post.content} /> 
}
```

#### Example: Blog > blog, blog,blog, ... + fullBlog
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/http1.jpg)

Step1: Make `<post>` clikable anf handle click event
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/http2.jpg)

Step2.1: blog.js --> Add new proerty `selectedPstId` in its state.
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/http3.jpg)

Step2.2: on click of post, update `selectedPstId`
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/http4.jpg)

Step3: pass `selectedPstId` to `<Fullpost>` component
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/http5.jpg)

Step4.1: Inside `<Fullpost>` component, use id. It id in null then display message to select a post.
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/http6.jpg)

Step4.2: Inside `<Fullpost>` component > ComponentDidUpdate() > call http GET for select post id and store result data in state : `loadedPost`. intially `loadedPost` is null.
```
axios.get(url)
.then() --> (resp) => {}
.catch() -->  (error) => {}

method chaining, use callback method to handle reponse and error.
```
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/http7.jpg)

Step 5 Fix Infiniteloop error
issue: 
1. FullPost : ComponentDidUpdate 
2. http AXIOS.GET call (selectedId)
3. setState : responseData.
4. state is changed > ComponentDidUpdate (step 1) > ... infinite loop

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/loop.jpg)

fix: invoke point 2 conditionally, only if SelectedId is different

### 2. POST
get data from input feild and set them in state.
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/post1.jpg)

axios.post(url, resource to be stored)
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/post2.jpg)

### 3. DELETE
Add Delete handler in `<post>`
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/del1.jpg)

Call Axios.Delete(url, resource to b deleted)
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/del2.jpg)

### 4. Error Handling 
If No reponse came > `catch()`
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/eh1.jpg)

***

### More
set baseURL, requestheader common,  requestheader post, etc
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/am0.jpg)

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/am1.jpg)

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/am_ie1.jpg)

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/am_ie2.jpg)



