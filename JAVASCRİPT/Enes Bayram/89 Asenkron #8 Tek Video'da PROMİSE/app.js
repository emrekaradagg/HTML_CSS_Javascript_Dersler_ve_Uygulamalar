// ? --------- PROMİSE ----------

// let check = true;

// const promise = new Promise((resolve, reject)=>{
//     if(check){
//         resolve("Promise Başarılı")
//     }else{
//         reject("Promise Başarısız")
//     }
// })

// console.log(promise);

// let check = true;
// function createPromise(){
//     return new Promise((resolve, reject)=>{
//         if(check){
//             resolve("Promiste herhangi bir sıkıntı yok")
//         }else{
//             reject("Sıkıntı büyük")
//         }
//     })
// }

// createPromise()
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=> console.log("Her zaman çalışır"))




function readStudents(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", ()=>{
            if(xhr.readyState===4 && xhr.status===200){
                resolve(JSON.parse(xhr.responseText));
            }
            })
        } catch (error) {
            reject(error);
        }
        xhr.open("GET",url);
        xhr.send();
    })
}

// readStudents("student.json")
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error))



function getUsers(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
           try {
            if(xhr.readyState===4 && xhr.status===200){
                resolve(JSON.parse(xhr.responseText))
            }
           } catch (error) {
            reject(error);
           }
        })
        xhr.open("GET",url);
        xhr.send();
    })
}

function getCommentByUserId(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error)
            }
        })
        xhr.open("GET",url);
        xhr.send();
    })
}




// getUsers("https://jsonplaceholder.typicode.com/users/3")
// .then((response) => {
//     console.log(response);
//    return getCommentByUserId(`https://jsonplaceholder.typicode.com/comments/${response.id}`)
//     console.log("Daha sonra asenkron kodlarını çalıştırabiliiriz")
// })
// .then((res)=> console.log(res))
// .catch((error) => console.log(error))
// .finally(()=>{
//     //Mail atma kodlarını yazarsınız.
// });

const p1 = Promise.resolve("birinci promise başarılı")
const p2 = Promise.resolve("ikinci promise başarılı")
const p3 = new Promise((resolve,reject)=>{
    resolve("üçüncü promise başarılı")
})
const p4 = Promise.reject("Hata var");

Promise.all([p1,p2,p3,p4])
.then((res)=>{
console.log(res)
// for(let value of res){
//     console.log(value)
// }
})
.catch((error)=> console.log(error))