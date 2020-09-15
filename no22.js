const name = [
    "Abigail","Alexandra","Alison","Amanda",
    "Angela","Bella","Carol","Caroline","Carolyn",
    "Deirdre","Diana","Elizabeth","Ella","Faith",
    "Olivia","Penelope"
]

const searchName = (nama, jumlah, callback) => {

    const saring = name.filter(l => l.toLowerCase().includes(nama));

    callback(saring, jumlah)
}
    const panggilbalik = (param, jumlah) => {
        const potong = param.slice(0, jumlah);
        console.log(potong);
    }

searchName("1", 4, panggilbalik)