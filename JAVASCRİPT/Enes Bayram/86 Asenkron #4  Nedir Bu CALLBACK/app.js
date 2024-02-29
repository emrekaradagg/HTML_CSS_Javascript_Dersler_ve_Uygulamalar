//CALLBACK NEDİR ?

//timing - event - http istekleri

//callback - promise - async await

//Callback : bir fonksiyonu bir fonksiyona parametre geçerek 
//asenkron yapıyı senkrona çeviririz

function getName(callback){
    setTimeout(() => {
        let name = "Emre";
        callback(name);
    }, 1000);
}

function getSurname(name, callback){
    setTimeout(() => {
        let surname = "Karadag";  //name'e göre soyismi buldu
        callback(surname);
    }, 500);
}

function getAge(name, surname, callback){
    setTimeout(() => {
        let age = 28;
        callback(age);
    }, 300);
}

getName((name)=>{

    getSurname(name, (surname)=>{
        

        getAge(name, surname,(age)=>{
            console.log(name, surname, age)
        })
    })

})