function balikKalimat(str) {

    var arrStr = [];
    var temp ="";
    for(var i = 0 ; i < str.length ; i++){
        if(str[i] === " "){
            arrStr.push(temp);
            temp="";
        }
        else{
            temp = temp + str[i]; 
        }
    }
    // console.log(arrStr);
    // console.log(temp);
    if(temp.length >= 0){
        arrStr.push(temp);
    }
    var result = "";
    for(var x=arrStr.length-1 ; x >=0 ; x--){
        result = result+" "+arrStr[x];
    }
    console.log(result);
}


balikKalimat("aku ganteng")