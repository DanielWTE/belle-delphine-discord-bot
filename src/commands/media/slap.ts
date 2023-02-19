import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction } from 'discord.js';
import { get } from 'request-promise-native';

// TODO: Unfck this mess

export default {
	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Slap someone with Belle\'s help!')
		.addUserOption(option => option.setName('user').setDescription('Who do you want to slap?').setRequired(true)),
	async execute(interaction: CommandInteraction) {
		const target = interaction.options.getUser('user');
		const executor = interaction.user;

		const option = {
			url: ('https://nekos.life/api/v2/img/slap'),
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			json: true,
		};

		if (!target) return new Error('Huh? I can\'t find the Member!');
		if (target === interaction.client.user) {
			interaction.reply({ content: 'Ouch! (◣_◢)', ephemeral: false });
		}
		else if (executor === target) {
			interaction.reply({ content: 'Sorry, you can\'t slap yourself...', ephemeral: true });
		}
		else {
			get(option).then(slap => {
				const Embed = new MessageEmbed()
					.setTitle(executor.username + ' slapped ' + target.username)
					.setImage(slap.url)
					.setColor('#de00c4')
					.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot'});
				interaction.reply({ embeds: [Embed] });
			});
		}
	},
};
