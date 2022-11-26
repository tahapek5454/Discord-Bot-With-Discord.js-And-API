import { EmbedBuilder } from "discord.js"


export default (description, color="Orange", title=null)=>{

    // gelen parametreler gore olusacak bir embed nesnesi yazalım
    const response = new EmbedBuilder()
    .setDescription(description)
    .setColor(color)
    .setTitle(title)

    return response
    // bu fonksiyon bize belirtilen temel embedi dondurucek
}