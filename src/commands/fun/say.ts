import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export default {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Let Belle say something!')
		.addStringOption(option => option.setName('message').setDescription('What should I say?').setRequired(true)),
	async execute(interaction: CommandInteraction) {
		const say = interaction.options.getString('message');
		if (!say) return new Error('Huh? I can\'t find the message!');
		/* if (say.includes('<@')) interaction.reply({ content: 'Sorry, you can\'t ping people...', ephemeral: true });*/

		interaction.reply({ content: say });
	},
};
