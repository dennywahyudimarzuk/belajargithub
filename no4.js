let data ={
    id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : "sincere@april.biz",
    address : {
        street : "Kulas Light",
        suite : "Apt. 556",
        city : "Grenborough",
        zipcode : "92998-3874"
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org"
}

//No. a
let dataBaru ={...data,
                name : "Denny Wahyudi Marzuk",
                email : "dennywm66@gmail.com",
                hobbies : "gaming, sports"
}
console.log(dataBaru)


//No. b
const {street,city} = data.address
console.log({street,city})