// ilgili komuta vereceğimiz cevabın bulunacağı yer

export default {
    name:"merhaba",
    execute(message){
        
        // reply botun yazacagı sey
        message.reply('Merhabalar Test Kanalına Hoşgeldiniz')
        .then(() => console.log(`Belitilen mesaja başarılı şekilde cevap verildi "${message.content}"`))
        .catch(console.error);
        
    }
}