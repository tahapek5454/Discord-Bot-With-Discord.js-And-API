import {EmbedBuilder} from "discord.js"

export default {
    name:'bilgi',
    execute(message){
        const {client} = message 
        
        var response = new EmbedBuilder()
            .setDescription("Ben bu kanala hizmet etmek için varım\n\u200b")
            .setColor("Orange")
            .setAuthor({name:"Test Botu",iconURL : client.user.displayAvatarURL(), url:"https://github.com/tahapek5454"})
            // iconURL : client.user.displayAvatarURL(), client de gonderbilsek eklenebili
            .setFooter({text:"Test Botu Hizmetinizdedir."})
            .setTimestamp()
            .addFields(
                {name : "Developer", value: "Taha Pek", inline:true},
                {name: "\u200b", value:"[Gihtub Hesabım](https://github.com/tahapek5454)", inline:true})
            
            // burada embedi kendimiz oluşturduk clientın altındaki embed fonksiyonumuzu kullanmadık
            // onun örneğini farklı bir yerde yapalım
            message.channel.send({content:"Benim Hakkımdaki Bilgiler Şu Şekildedir", embeds:[response]})

    }
}

