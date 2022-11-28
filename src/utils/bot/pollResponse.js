 import pollResponseSchema from "../db/buildSchema.js";

export default (interaction) => {
        // kullanıcnın responsuna göre dönen işlemler
        var myEmbed;
        var response;
        if (interaction.customId == "poll1") {
                myEmbed = interaction.client.embed(
                        `Cevabımız Başarılı Bir Şekilde Kaydedilmiştir.\n ${interaction.user.username} : 1`,
                        "Orange",
                        "Anket Cevabı")

                response = new pollResponseSchema({
                        userName:interaction.user.username,
                        score:1,
                })
        } else if (interaction.customId == "poll2") {
                myEmbed = interaction.client.embed(
                        `Cevabımız Başarılı Bir Şekilde Kaydedilmiştir.\n ${interaction.user.username} : 2`,
                        "Orange",
                        "Anket Cevabı")

                response = new pollResponseSchema({
                        userName: interaction.user.username,
                        score: 2,
                })
        } else if (interaction.customId == "poll3") {
                myEmbed = interaction.client.embed(
                        `Cevabımız Başarılı Bir Şekilde Kaydedilmiştir.\n ${interaction.user.username} : 3`,
                        "Orange",
                        "Anket Cevabı")

                response = new pollResponseSchema({
                        userName: interaction.user.username,
                        score: 3,
                })
        } else if (interaction.customId == "poll4") {
                myEmbed = interaction.client.embed(
                        `Cevabımız Başarılı Bir Şekilde Kaydedilmiştir.\n ${interaction.user.username} : 4`,
                        "Orange",
                        "Anket Cevabı")

                response = new pollResponseSchema({
                        userName: interaction.user.username,
                        score: 4,
                })
        } else if (interaction.customId == "poll5") {
                myEmbed = interaction.client.embed(
                        `Cevabımız Başarılı Bir Şekilde Kaydedilmiştir.\n ${interaction.user.username} : 5`,
                        "Orange",
                        "Anket Cevabı")

                response = new pollResponseSchema({
                        userName: interaction.user.username,
                        score: 5,
                })
        }

        const result = import("../db/crudMongo.js").then(result=> result.default(response))
        interaction.reply({ embeds: [myEmbed], ephemeral: true })
}