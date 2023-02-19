import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageActionRow, MessageButton, MessageEmbed, CommandInteraction } from 'discord.js';

export default {
	data: new SlashCommandBuilder()
		.setName('favourites')
		.setDescription('View all your liked images and videos!'),
	async execute(interaction: CommandInteraction) {

		const { username } = interaction.user;

		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('showFavourites')
					.setLabel('Show Favourites in Discord')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setLabel('Go to our Website')
					.setStyle('LINK')
					.setURL('https://belledelphine.gg/'),
				new MessageButton()
					.setLabel('Direct Login')
					.setStyle('LINK')
					.setURL('https://discordapp.com/oauth2/authorize?response_type=code&client_id=989196440918188032&redirect_uri=https://belledelphine.gg/profile/login&scope=identify'),
			);

		const Embed = new MessageEmbed()
			.setTitle(username + '\'s ' + 'favourites')
			.setColor('#de00c4')
			.setDescription('Welcome to your favourites!\n You can view all your liked images and videos on our website.\n\n You can also view them directly in Discord by clicking the button below. (ATTENTION: Others will be able to see your favourites as well!)')
			.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });

		interaction.reply({ embeds: [Embed], components: [row], ephemeral: true });

	},
};