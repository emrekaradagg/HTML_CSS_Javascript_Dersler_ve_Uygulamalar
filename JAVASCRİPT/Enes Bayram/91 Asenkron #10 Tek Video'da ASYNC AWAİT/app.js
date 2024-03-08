//? -----------ASYNC AWAIT --------------

// async function hello(){
//     return "Hello World"
// }

// console.log(hello())
// hello()
// .then((res) => console.log(res));

// document.querySelector("#button").addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((post) => {
//         console.log(post)
//         fetch(`https://jsonplaceholder.typicode.com/comments?postsId=${post.id}`)
//         .then((response) => response.json())
//         .then((comments) => console.log(comments))
//     })
// })


//! Async aait ile yapılışı

document.querySelector("#button").addEventListener("click",async ()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?
    postsId=${post.id}`)).json()
    console.log(post,comments)


})