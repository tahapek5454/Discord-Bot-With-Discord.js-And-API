import mongoose from "mongoose";

export default ()=>{
    const dbUrl = "mongodb://localhost:2717/ServerPollResponse"
    // connection string
    // url li parcalamak ve basarili baglanti saglamak icin ekleme yapıyoruz
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => console.log("MongoDB Baglantisi Basarili"))
    .catch(err => console.log("MongoDb Bağlantısı Gerçekleştirilemedi !",err))
}
