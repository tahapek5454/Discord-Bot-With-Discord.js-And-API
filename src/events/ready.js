// bir event handler koyuyoruz burda yani bize ready durumunda bilgi veriyor

export default (client) =>{
    client.once('ready', ()=>{
        console.log('Bot is online')
    })
}