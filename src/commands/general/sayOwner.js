
export default {
    name:"sahip",
    execute(message){

        const {client} = message
        // burada deneme olsun diye kendi clientimiz içersinde yerleştirdiğimiz embed  fonksiyonunu kullandık
        message.channel.send({embeds: [client.embed("Bu Kanalın Sahibi Taha Pek", "Orange", "Kurucu")]})
    },
}