import {EmbedBuilder} from "discord.js"

// burada gelen genel komutlara karşı nasıl cevap vereceğimizi yansıttıüımız yerler
export default {
    name:"ping",
    execute(message){
        
        const discod_ping = message.client.ws.ping
        // message dan client e ulaştık ordan web sockete ordan da pinge discord.Js :)
        const bot_ping =  Math.abs(message.createdTimestamp - Date.now()) 
        

        // şu anki zamandan mesajın oluşumunu çıkardım

        const response = new EmbedBuilder()
        response.setColor("Orange")
        response.addFields(
            {name:"Discord Ping", value:`${discod_ping} ms`, inline:true},
            {name:"Bot Ping", value: `${bot_ping} ms`, inline:true})
        
        message.reply({embeds: [response]})
    },
}