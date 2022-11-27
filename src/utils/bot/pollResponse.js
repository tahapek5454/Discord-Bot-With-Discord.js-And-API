
export default (interaction)=>{
        // kullanıcnın responsuna göre dönen işlemler
        var myEmbed ;
        if (interaction.customId == "poll1"){
             myEmbed = interaction.client.embed(
                `Cevabımız Başarılı Bir Şekilde Kaydedilmiştir.\n ${interaction.user.username} : 1`,
                "Orange",
                "Anket Cevabı")
        }else if(interaction.customId == "poll2"){
             myEmbed = interaction.client.embed(
                `Cevabımız Başarılı Bir Şekilde Kaydedilmiştir.\n ${interaction.user.username} : 2`,
                "Orange",
                "Anket Cevabı")
        }else if(interaction.customId == "poll3"){
            myEmbed = interaction.client.embed(
               `Cevabımız Başarılı Bir Şekilde Kaydedilmiştir.\n ${interaction.user.username} : 3`,
               "Orange",
               "Anket Cevabı")
       }else if(interaction.customId == "poll4"){
             myEmbed = interaction.client.embed(
                `Cevabımız Başarılı Bir Şekilde Kaydedilmiştir.\n ${interaction.user.username} : 4`,
                "Orange",
                "Anket Cevabı")
        }else if(interaction.customId == "poll5"){
            myEmbed = interaction.client.embed(
               `Cevabımız Başarılı Bir Şekilde Kaydedilmiştir.\n ${interaction.user.username} : 5`,
               "Orange",
               "Anket Cevabı")
       }

       interaction.reply({embeds:[myEmbed], ephemeral:true})
}