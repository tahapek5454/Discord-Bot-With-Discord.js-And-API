var addValue = (response)=>{

    response.save()
    .then(result => console.log("Sonuc Basarili Bir Şekilde Kaydedildi",result))
    .catch(err => console.log("Hata Tespiti",err))

}

var getValues = (collection) =>{

   return collection.find().catch(err=>console.log("Hata Yakalandı!",err))
}

var getValue = (collection, userName)=>{
    return collection.find({"userName":userName}).catch(err=>console.log('hata',err))
}


export {addValue, getValues, getValue} 

