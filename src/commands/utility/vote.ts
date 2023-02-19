import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageActionRow, MessageButton, MessageEmbed, CommandInteraction } from 'discord.js';

export default {
	data: new SlashCommandBuilder()
		.setName('vote')
		.setDescription('Vote for us to bring Belle Delphine to the top!'),
	async execute(interaction: CommandInteraction) {
		const { id: userID, username } = interaction.user;

		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
                    .setLabel('discordbotlist.com')
                    .setURL("https://discordbotlist.com/bots/belle-delphine/upvote")
                    .setStyle('LINK'),
				new MessageButton()
                    .setLabel('discords.com')
                    .setURL("https://discords.com/bots/bot/959792091981025320/vote")
                    .setStyle('LINK'),
			);


		const Embed = new MessageEmbed()
			.setTitle('Vote for us!')
			.setColor('#de00c4')
			.setDescription('Hi, ' + username + ', **please vote for us!** Just like you, we want to push Belle even further to the top, but that\'s **only possible with your help!**\n\n So vote for us, **with the buttons below you can go directly to the websites!**\n\n**Thanks!** :heart:')
			.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });
		await interaction.reply({ ephemeral: true, embeds: [Embed], components: [row] });
	},
};