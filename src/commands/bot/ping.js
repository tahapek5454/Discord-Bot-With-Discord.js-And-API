import {EmbedBuilder} from "discord.js"

// burada gelen genel komutlara karşı nasıl cevap vereceğimizi yansıttıüımız yerler
export default {
    name:"ping",
    execute(message){
        // params yerine hani biz message atıyorduk ya
        // messageden cliennte falan bir cok şeye ulaşılıyor
        // şmyle yapacam:
        // const {client} = message
        // atıyorum emojiye ulaşıcaz
        // const {emoji} = message.client
        const {client} = message


        
        // params bir dizi bize genel metod message ve client yolluyor
        // nessage için params[0], client için params[1]
        
        const discod_ping = client.ws.ping
        // message dan client e ulaştık ordan web sockete ordan da pinge discord.Js :)
        const bot_ping =  Math.abs(message.createdTimestamp - Date.now()) 
        

        // şu anki zamandan mesajın oluşumunu çıkardım

        const response = new EmbedBuilder()
        response.setColor("Orange")
        response.addFields(
            {name:`${client.emoji("taha")} Discord Ping`, value:`${discod_ping} ms`, inline:true},
            // params[1] : client oluyor taha emojiye verdigim isim
            {name:"Bot Ping", value: `${bot_ping} ms`, inline:true})
        
        message.reply({embeds: [response]})
    },
}