import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction } from 'discord.js';
import { get } from 'request-promise-native';

export default {
	data: new SlashCommandBuilder()
		.setName('pat')
		.setDescription('Pat someone with Belle\'s help!')
		.addUserOption(option => option.setName('user').setDescription('Who do you want to pat?').setRequired(true)),
	async execute(interaction: CommandInteraction) {
		const target = interaction.options.getUser('user');
		const executor = interaction.user;
		if (!target) return new Error('Huh? I can\'t find the Member!');
		if (target === interaction.client.user) {
			interaction.reply({ content: 'Aww, thanks for the pat... UwU', ephemeral: false });
		}
		else if (executor === target) {
			interaction.reply({ content: 'Sorry, you can\'t pat yourself...', ephemeral: true });
		}
		else {

			const options = {
				url: (process.env.cdnBasePath + '/api/user/interactions/pat/'),
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': process.env.cdnApiAuth,
				},
				json: true,
			};
			get(options).then(async patId => {
			const Embed = new MessageEmbed()
				.setTitle(executor.username + ' stroked ' + target.username)
				.setImage(patId.imgUrl)
				.setColor('#de00c4')
				.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot'});
			interaction.reply({ embeds: [Embed] });
		})}
	},
};
