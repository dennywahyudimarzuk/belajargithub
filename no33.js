let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {

    let nilaiAw,nilaiAk,dataAr
   
    if (typeof nilaiAwal !== 'number'){
    console.log('isi nilai awal harus number')}
    if (typeof nilaiAkhir !== 'number'){
    console.log('isi nilai akhir harus number')
    }
    
    if(nilaiAwal < nilaiAkhir) {
        nilaiAw = nilaiAwal
        nilaiAk = nilaiAkhir
    }
    else {
        console.log('nilai akhir harus lebih besar dari nilai awal');
    }

    Array.isArray(dataArray) === false?
    console.log('Data harus array'):
    dataArray.every(d => typeof d === 'number') === false ? 
    console.log('Data array harus berupa number'):
    
    if(dataArray.length >= 5){

    }
    dataAr = dataArray
    let saring = (nilaiAw, nilaiAk, dataAr, callback) => {
        let dataSaring = dataAr.filter(f => f > nilaiAw && f < nilaiAk)
        callback(dataSaring)
    }
    let dataSusun = (wadahSaring) => {
        console.log(wadahSaring.sort((a,b)=>a-b));
    }
    else{
        console.log('Data array harus lebih dari 5')
    }

    saring(nilaiAw,nilaiAk,dataAr,dataSusun)

}

seleksiNilai(1,5,[1,2,8,5,4])