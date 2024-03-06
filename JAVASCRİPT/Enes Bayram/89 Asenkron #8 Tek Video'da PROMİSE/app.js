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
        xhr.send()
    })
}

readStudents("student.json")
.then((data)=> console.log(data))
.catch((error)=> console.log(error))