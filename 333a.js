const username = (nickname) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let nick = ['denny','wahyudi','marzuk']
            let cari = nick.find(i => i == nickname)
            if (cari){
                resolve(cari)
            }
            else {
                reject(new Error('Username not found'))
            }
        }, 2000)
        setTimeout(() => {
            reject(new Error('Check your internet connection'))
        }, 1000)
    })

//then-catch
username('denn')
.then((res) => {
        console.log('welcome')
    })
.catch((rej)=>{
    console.log(rej.message)
    })

//try-catch
// const findUsername = async(nickname) =>{
//     try{
//         let res = await username(nickname)
//         console.log('welcome')
//     }
//     catch(rej){
//         console.log(rej.message)
//     }
// }

// findUsername("denny")