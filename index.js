const Discord = require('discord.js')
const bot = new Discord.Client()

const prefix = "ago!"

client.login("NTAyMDgwNjA2NTE2MTUwMjcy.Dqjchg.RsHBEWtB_7dZzCEQyKGySGCBASM");

client.on("ready", () => {
    client.user.setActivity("En développement", {type:"STREAMING"});
    console.log(`Le bot a démarré avec ${bot.users.size} utilisateurs, ${bot.channels.size} salons et ${bot.guilds.size} serveurs.`)
});

client.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('Le bot dit Bonjour');
    }

    if(message.content === "Bonsoir"){
        message.reply("Bonsoir :wave:");
        console.log('Le bot dit Bonsoir');
    }

    if(message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor("#0800F6")
        .setTitle("Voici mes commandes d'aide !")
        .addField("Commande de Modération", "ago!mute ago!unmute ago!ban ago!unban ago!kick (en développement)")
        .addField("Commande Fun","en developpement")
        .setFooter("Bot crée et developper par Vine#7555")
        message.channel.send("La page d'aide vous à bien été envoyée en Message Privé !")
        message.author.send(help_embed)
        console.log("Un utilisateur a effectué la commande d'aide !")
    }
});
