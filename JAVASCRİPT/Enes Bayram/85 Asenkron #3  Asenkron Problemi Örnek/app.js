//ASENKRON PROBLEMİ

//http istekleri

const users = 
[
    {
        userId : 5,
        post : "Emre Post 1"
    },
    {
        userId : 5,
        post : "Emre Post 1"
    },
    {
        userId : 5,
        post : "Emre Post 1"
    },
    {
        userId : 5,
        post : "Ali Post 1"
    },
    {
        userId : 5,
        post : "Esma Post 1"
    },
]

function getUserId(){
    setTimeout(() => {
        //Servise gittik cevabı aldık.
        return 5;
    }, 1000);
}

function getPostByUserId(userId){
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })
    }, 500);

}

let userId = getUserId();
getPostByUserId(userId);




