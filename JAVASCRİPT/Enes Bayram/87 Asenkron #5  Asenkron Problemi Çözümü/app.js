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
        userId : 6,
        post : "Ali Post 1"
    },
    {
        userId : 7,
        post : "Esma Post 1"
    },
]

function getUserId(callback){
    setTimeout(() => {
        //Servise gittik cevabı aldık.
        let userId = 7;
        callback (userId);
    }, 1000);
}

function getPostByUserId(userId, callback){
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })
    }, 500);

}

getUserId(getPostByUserId);




