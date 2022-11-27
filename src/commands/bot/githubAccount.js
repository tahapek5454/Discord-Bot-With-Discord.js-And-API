
import { ActionRowBuilder, ButtonBuilder } from "discord.js"

export default{
    name:"github",
    execute(message){
        const row = new ActionRowBuilder()
        .setComponents(
            new ButtonBuilder()
            .setEmoji("👍")
            .setLabel("Github Hesabına Gitmek İçin")
            .setStyle("Link")
            .setURL("https://github.com/tahapek5454")
        )
        
        message.reply({content:"Github", components:[row]})
        
    }
}