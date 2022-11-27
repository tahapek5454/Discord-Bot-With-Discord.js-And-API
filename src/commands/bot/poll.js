
import { ActionRowBuilder, ButtonBuilder } from "discord.js"
// embed e action ve buton eklemek için import işlemleri gerçekleştirdik

export default{
    name:"anket",
    execute(message){
        // chate !anket yazıldığından olacak işlemler

        // actionBuilder button componentini atadık ve özelleştirdik
        const row = new ActionRowBuilder()
        .setComponents(
            new ButtonBuilder()
            .setCustomId("poll1")
            .setEmoji("1️⃣")
            .setLabel(" ")
            .setStyle("Danger"),

            new ButtonBuilder()
            .setCustomId("poll2")
            .setEmoji("2️⃣")
            .setLabel(" ")
            .setStyle("Danger"),

            new ButtonBuilder()
            .setCustomId("poll3")
            .setEmoji("3️⃣")
            .setLabel(" ")
            .setStyle("Secondary"),
            
            new ButtonBuilder()
            .setCustomId("poll4")
            .setEmoji("4️⃣")
            .setLabel(" ")
            .setStyle("Success"),

            new ButtonBuilder()
            .setCustomId("poll5")
            .setEmoji("5️⃣")
            .setLabel(" ")
            .setStyle("Success")
        )
        
        // daha önceden oluşturduğumuz embed fonksiyonuyla embed oluşturup cevap olarak gönderdik
        const myEmbed = message.client.embed("Merhabalar Hizmetimizi Değerlendirmek İster misiniz ?", "Orange", "Anket")
        message.channel.send({embeds:[myEmbed],components:[row]})
        
    }
}