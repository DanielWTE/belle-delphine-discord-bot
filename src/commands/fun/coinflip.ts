import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export default {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Let Belle flip a coin!'),
	async execute(interaction: CommandInteraction) {
		interaction.reply({ content: ':coin: You flipped ' + (Math.random() < 0.5 ? 'Heads' : 'Tails') + '!' });
	},
};