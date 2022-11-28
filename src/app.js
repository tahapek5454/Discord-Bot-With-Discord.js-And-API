import {Client, Collection} from "discord.js"
import "dotenv/config" // ben bunu .env kullanmak icin import ediyorum npm install dotenv
import {readdirSync} from "fs" // bu modül bizim dosyaları kontrol etmememizi saglayacak


var client = new Client({
    intents:["Guilds", "GuildMessages", "MessageContent",],
    // guilds sunucumuzla alakalı bir yapı, guildMessages sunucu mesajları, MessageContent messajların içerini almak
    presence:{activities:[{name:"Slash Commands", type:"PLAYING"}]},
    // presence kabaca botun durumuyla alakalı bilgiler
})
// intentler aslında botun amacını taşır
// yani biz mesaj okumasını mı istiyoruz, girilen yeni kullanıcıya selam vermisini mi vb.
// kısacası almak istedgimiz veri

// Assigments
client.commands = new Collection()

client.emoji = emojiName => {
    return client.guilds.cache.get(process.env.OWNER_GUILD_ID).emojis.cache.find(e=> e.name == emojiName) || ":smile:"
    // burası benim belirlediğim sunucudaki emojileri çekip clientın içine atacak bulamzsa smile atacak
}

client.embed = await import("./utils/bot/embed.js").then(m=>m.default)
// clientımın altına embedi kaydettim artık burdaki fonksiyona client embed üzerinden erişebilirim

const db = import("./utils/db/connectionMongo.js").then(db=> db.default())
// dataBase e Baglanma islemini gerceklestirdik

// event loader bize eventlerimizi yükleuecek
readdirSync("./events")
.filter(file => file.endsWith('.js'))
.forEach(async file=>{
    const event = await import(`./events/${file}`)
    // burada dosya import etme islemini yaptık, dosya adını dinamik cektik, asenkron metod gelmesini
    // beklemek icin await koyduk 
    // event e biz bakarsan bir fonksiyon gonderdik, parametre olrak client alıyor
    event.default(client)
})

// comand Loader bize commandlerimi yükleyecek
// commands i bir collection olarak clientin altına tanımlıyoruz
readdirSync("./commands").forEach(category =>{
    // biz commands altındaki klasör adlarına ulaştık
    // klosörlerin içindeki dosyalara da ulaşalım
    readdirSync(`./commands/${category}`).forEach(async file =>{
        // belirtilen dosya isimlerini de aldık şimdi bunları import edelim
        const command = await import(`./commands/${category}/${file}`).then(c => c.default)
        // durmadan default yazmamak için oraya direkt defaul döndürdüm

        // simdi bunu client altındaki commands adındaki collectiona ekleyelim
        client.commands.set(command.name, command)
        // bu sekilde key valuesunı vererek ekledik
        // key burda tanımladığımız isim value ise belirttiğimiz obje oldu
    })
})


function myCollection(){
    // collectionler aslında js deki objelerin gelişmiş hali
    // bot bize verileri collection şeklinde döderir
    var collection = new Collection()

    // collectiona deger atama
    collection.set("a",1)
    collection.set("b",2)
    collection.set("c",3)
    collection.set("d",4)

    // collectiondan deger alma
    console.log(collection.get("a"))

    // collection boyut sorgusu
    console.log("Collection Boyutu "+collection.size)

    // collectionda has yani sahip mi
    console.log(collection.has('a'))

    // not: Collectionlarda ayriyetten find, filter, map, reduce gibi metodları kullanabiliyoruz
    var result = collection.map((val => val**2))
    console.log('Map ornegi ' + result)

    // collection keylerini almak icin
    console.log(Array.from(collection.keys()))

    // collection value almak icin
    console.log(Array.from(collection.values()))

    // collection keylerini ve valulerini almak icin
    console.log(Array.from(collection.entries()))

    // collection ilk iki degeri alalım
    console.log(collection.first(2))

    // filterlama icin sweep Kullanırız kosulu saglayanları siler sweepler
    // bize kac elemean silindigini dondurur
    collection.sweep((val)=> val>3)
    console.log(collection)

    // collectionu ikiye parcalamak icin ise partition kullanılır
    // icindeki fonksiyonu kabül edersse accepted da etmezse rejecteda atayacak

    var [accepted, rejected] = collection.partition((val)=> val>=2)
    console.log(accepted)
    console.log(rejected)
}

// client login ile botumuzu login ediyoruz
client.login(process.env.TOKEN)

