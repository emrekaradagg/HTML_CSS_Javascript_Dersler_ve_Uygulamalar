//? ---------FETCH API ------------

// function getStudents(url){
//     fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }

// getStudents("student.json");

// function getData(url){
//     const promise = fetch("https://jsonplaceholder.typicode.com/users")
//     console.log(promise)
//     // fetch(url)
//     // .then((response)=>{
//     //     return response.json();
//     // })
//     // .then((data) => console.log(data))
//     // .catch((err) => console.log(err))
// }

// getData("https://jsonplaceholder.typicode.com/users")





// function saveStudents(){
//     fetch("https://jsonplaceholder.typicode.com/users", {
//         method : "POST",
//         headers : {
//             "Content-Type" : "application/json"
//         },
//         body : JSON.stringify( {
//             "id" : 2,
//             "firstname" : "Göknur",
//             "lastname" : "Kaya"
//         })
//     })
// }