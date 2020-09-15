
const mtk = 80
const bIndonesia = 90
const bInggris = 89
const ipa = 69

if (mtk==null || bIndonesia==null || bInggris==null || ipa==null ){
        console.log("Nilai harus terisi semua")
    }
    else{
    let hasil = ((mtk + bIndonesia + bInggris + ipa)/4)
        {
        console.log("Rata-rata = "+hasil)

        if (hasil >= 90 && hasil <= 100) {
            console.log("Grade = A")
        }
        else if (hasil >= 80 && hasil < 90){
            console.log("Grade = B")
        }
        else if (hasil >= 70 && hasil < 80){
            console.log("Grade = C")
        }
        else if (hasil >= 60 && hasil < 70){
            console.log("Grade = D")
        }
        else if (hasil >= 0 && hasil < 60){
            console.log("Grade = E")
        }
    }
}