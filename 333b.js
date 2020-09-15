const username = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                { mataKuliah : 'Rangkaian Listrik', SKS : 3},
                { mataKuliah : 'Bahasa Inggris', SKS : 4},
                { mataKuliah : 'Rekayasa Perangkat Lunak', SKS : 2},
                { mataKuliah : 'Kalkulus', SKS : 3}      
            )
        }, 2000)
        setTimeout(() => {
            reject(new Error('Check your internet connection'))
        }, 3000)
    })

//then-catch
// username('denny')
// .then((res) => {
//         console.log('welcome')
//     })

// .catch((rej)=>{
//     console.log(rej.message)
//     })

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