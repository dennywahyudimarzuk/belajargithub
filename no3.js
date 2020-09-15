let printSegitiga = 6

let temp = ""
for (let i = printSegitiga ; i > 0 ; i--){
    
    for (let j = 1 ; j <= i ; j++ ){
        temp = temp + j
    }
    temp = temp + "\n"
}
console.log(temp)