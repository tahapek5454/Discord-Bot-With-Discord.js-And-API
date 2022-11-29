import express from "express";
import Schema from "../src/utils/db/buildSchema.js"
import {getValue, getValues} from "../src/utils/db/crudMongo.js"
// express bize sunucu oluşturup api yazmayı sağlayan kütüphane(web uygulama çerçevesi)


var app = express()

// sunucumuzu başlattığımız kısım
var server = app.listen(8000, ()=>{
    // api den gelen istekleri karşılamak için db ye bağlanıyoruz
    const db = import("../src/utils/db/connectionMongo.js").then(db=> db.default())
    console.log("Server is up")
})

// Bize GET metodu lazım sadece
// GET
app.get("/getValues",  async (req, res)=>{
    
    var values = await getValues(Schema)
    // values bize json object tipinde gelecek
    res.json(values)
})


app.get("/getValue", async (req, res)=>{
    
    var value = await getValue(Schema, req.query.userName)
    // value bize json object tipinde gelecek
    res.json(value)
})