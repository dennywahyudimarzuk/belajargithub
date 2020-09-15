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

    if (Array.isArray(dataArray) === false){
    console.log('Data harus array')
    }

    if (dataArray.every(d => typeof d === 'number') === false){ 
    console.log('Data array harus berupa number')
    }
    else{
        
        if(dataArray.length >= 5){
    
        dataAr = dataArray
    
        let saring = (nilaiAw, nilaiAk, dataAr, cb) => {
            let dataSaring = dataAr.filter(f => f > nilaiAw && f < nilaiAk)
            cb(dataSaring)
        }
    
        let dataSusun = (wadahSaring) => {
            console.log(wadahSaring.sort((a,b)=>a-b));
    
            saring(nilaiAw,nilaiAk,dataAr,dataSusun)
        }}
        
        else{
        console.log('Data array harus lebih dari 5')
        }}
        
    }

seleksiNilai(1,9,[1,9,2,2,10])