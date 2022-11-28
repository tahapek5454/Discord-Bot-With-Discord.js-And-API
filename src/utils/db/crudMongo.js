var addValue = (response)=>{

    response.save()
    .then(result => console.log("Sonuc Basarili Bir Şekilde Kaydedildi",result))
    .catch(err => console.log("Hata Tespiti",err))

}

var getValues = (collection) =>{

    collection.find().then(result=>console.log(result))
}

var getValue = (collection, userName)=>{
    collection.find({"userName":userName}).then(result=>console.log(result)).catch(err=>console.log('hata',err))
}


export {addValue, getValues, getValue} 

