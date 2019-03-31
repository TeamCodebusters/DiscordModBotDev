const Discord = require("discord.js");
const config = require("../../config/config");

module.exports = {
    do: function(params) {
        params.message.reply(" du hast leider keine Berechtigung für diesen Command");

        let linkChannel = `https://canary.discordapp.com/channels/${params.message.guild.id}/${params.message.channel.id}`;

        let nopermsEmbed = new Discord.RichEmbed()
            .setTitle("Ein User hat versucht einen anderen zu muten (noperm)")
            .setColor()
            .addField("Channel", linkChannel)
            .addField("User", `${params.message.author}/${params.message.author.id}`)
            .setFooter(`${config.appName} ${config.version}`)
            .setTimestamp();

        params.logChannel.send({ embed: nopermsEmbed });
        return;
    }
}