
// burası messajları algılayıp cevap verdiğimiz event handler
export default client =>{
    const prefix = process.env.PREFIX
    // bunu koyma amacımız kalıplaşmış bot komutlarını oluşturmak
    console.log(prefix)
    client.on("messageCreate",(message)=>{

        if (message.content.startsWith(prefix) == false) return
        // prefixle başlamıyorsa kale alma

        const args = message.content.slice(prefix.length).trim().split(/ +/)
        // biz gelen komutu parametrelerini de almak için ayırma işlemini yaptık

        const commanName = args.shift().toLowerCase()
        // shift ile dizideki ilk elemanı alıp kalan elemanları diziye attık

        const command = client.commands.get(commanName)

        if(!command) return
        // eger belitrilen adda bir command bulunmuyorsa return at

         try {
            // eger sıkınıt yoksa commandsmiz içindeki fonksiyonu calistiralim
            command.execute([message, client])
            
         } catch (error) {
            console.log(error)
            message.reply("İlgili Komutta Hata Bulunmaktadır.")
            
         }
        // burada program çalışırken eklenmiş olan comman collectionun içindeki
        // ilgili command bizim degiskenimize atanıyor

        
    })
}

