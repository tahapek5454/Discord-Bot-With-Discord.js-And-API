import {EmbedBuilder} from "discord.js"

export default client =>{
    client.on("messageCreate",(message)=>{
        if (message.content == "bilgi"){
            // reply botun yazacagı sey
            var response = new EmbedBuilder()
            .setDescription("Ben bu kanala hizmet etmek için varım\n\u200b")
            .setColor("Orange")
            .setAuthor({name:"Test Botu", iconURL : client.user.displayAvatarURL(), url:"https://github.com/tahapek5454"})
            .setFooter({text:"Test Botu Hizmetinizdedir."})
            .setTimestamp()
            .addFields(
                {name : "Developer", value: "Taha Pek", inline:true},
                {name: "\u200b", value:"[Gihtub Hesabım](https://github.com/tahapek5454)", inline:true})

            message.channel.send({content:"Benim Hakkımdaki Bilgiler Şu Şekildedir", embeds:[response]})
            
        }
    })
}