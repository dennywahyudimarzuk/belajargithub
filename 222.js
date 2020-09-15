const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

const cb = (wadah, bulan) => {
    if(wadah == null){
    const ubah = bulan.map(m => console.log(m))
    }
    else{
        console.log(wadah.message)
    }

    // const ubah = bulan.map(function(m){
    //     console.log(m.toString())})
}

getMonth(cb)