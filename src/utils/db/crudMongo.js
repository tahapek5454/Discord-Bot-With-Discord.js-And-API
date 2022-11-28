
export default (response)=>{

    response.save()
    .then(result => console.log("Sonuc Basarili Bir Şekilde Kaydedildi",result))
    .catch(err => console.log("Hata Tespiti",err))

}
