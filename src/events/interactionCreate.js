import pr from "../utils/bot/pollResponse.js"


// burası etkileşimleri algılayıp cevap verdiğimiz event handler
export default client =>{

    // anketimizdeki buton işlemlerini dinleyecek olan handler 'interactionCreate'
    client.on("interactionCreate", (interaction)=>{
        
        pr(interaction)
        // etkilişimi aldıktan sonra kullanıcıya respose göndermek için oluşturduğumuz
        // fonksiyonu çağrıyoruz
        
    })
}

