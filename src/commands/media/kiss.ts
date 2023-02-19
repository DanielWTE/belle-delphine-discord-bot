import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction } from 'discord.js';
import { get } from 'request-promise-native';

export default {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('Kiss someone with Belle\'s help!')
		.addUserOption(option => option.setName('user').setDescription('Who do you want to kiss?').setRequired(true)),
	async execute(interaction: CommandInteraction) {

		const options = {
			url: (process.env.cdnBasePath + '/api/user/interactions/kiss/'),
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': process.env.cdnApiAuth,
			},
			json: true,
		};

		const target = interaction.options.getUser('user');
		const executor = interaction.user;
		if (!target) return new Error('Huh? I can\'t find the Member!');
		if (target === interaction.client.user) {
			interaction.reply({ content: 'NO! <.>', ephemeral: false });
		}
		else if (executor === target) {
			interaction.reply({ content: 'Sorry, you can\'t kiss yourself...', ephemeral: true });
		}
		else {
			get(options).then(async kissId => {
			const Embed = new MessageEmbed()
				.setTitle(executor.username + ' kissed ' + target.username)
				.setImage(kissId.imgUrl)
				.setColor('#de00c4')
				.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot'});
			interaction.reply({ embeds: [Embed] });
		})}
	},
};
