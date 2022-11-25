
// burası messajları algılayıp cevap verdiğimiz event handler
export default client =>{
    client.on("messageCreate",(message)=>{
        if (message.content == "merhaba"){
            // reply botun yazacagı sey
            message.reply('Merhabalar Test Kanalına Hoşgeldiniz')
            .then(() => console.log(`Belitilen mesaja başarılı şekilde cevap verildi "${message.content}"`))
            .catch(console.error);
        }
    })
}

