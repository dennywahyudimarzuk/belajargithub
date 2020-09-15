// setTimeout(()=>(
//     console.log("ini kode 1")
// ),1000)
// console.log("ini kode 2")



//promise
let showGretings = (massage)=>{
    console.log(massage)
}

let janjian = (showGretings) =>
    new Promise((resolve, reject)=>{
    let success = true
    if(success){
        resolve("berhasil")
        showGretings("halo selamat siang")
    }
    else{
        reject(new Error('janji dibatalkan'))
    }
})
janjian(showGretings)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));