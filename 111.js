const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
};

//then-catch
// cekHariKerja('sabtu')
// .then((res) => {
//     console.log(`hari ini hari kerja`)
// })
// .catch((rej)=>{
//     console.log(rej.message)
// })

//try-catch
// const manggilCekHariKerja = async(day) =>{
//     try{
//         let res = await cekHariKerja(day)
//         console.log('Hari ini hari kerja')
//     }
//     catch(rej){
//         console.log(rej.message)
//     }
// }

// manggilCekHariKerja("rabu")