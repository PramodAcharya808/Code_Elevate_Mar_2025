# HTTP METHODS

- GET : Retrieve data from the server
- POST : Send data to the server to create a new resource
- DELETE : To delete complete data from the server
- PATCH : Update a part of resource on the server
- PUT : To update and replace the complete data on the server

URL : Uniform Resource Locator
URI : Uniform Resource Identifier

http://localhost:8000/

/api/v1/get/post

/api/v1/create/post

/api/v1/update/post

/api/v1/delete/post/:id

/api/v1/delete/allpost

https://jsonplaceholder.typicode.com/

## Use case of useEffect()

- fetch data from APIs
- set timers/intervals
- mupliple api calls

## useEffect Dependencies

- [ ] : runs only `ONCE` on initial mount
- [variable] : runs when the `variable` changes/updates
- if no second param -> runs on `EVERY RENDER`

<br/>

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## How to create Loading Animation

https://css-loaders.com/
