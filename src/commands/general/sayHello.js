// ilgili komuta vereceğimiz cevabın bulunacağı yer

export default {
    name:"merhaba",
    execute(params){
        // params bir dizi bize genel metod message ve client yolluyor
        // nessage için params[0], client için params[1]
        // reply botun yazacagı sey
        params[0].reply('Merhabalar Test Kanalına Hoşgeldiniz')
        .then(() => console.log(`Belitilen mesaja başarılı şekilde cevap verildi "${params[0].content}"`))
        .catch(console.error);
        
    }
}