import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

const eightball = [
	'It is certain.',
	'It is decidedly so.',
	'Without a doubt.',
	'Yes definitely.',
	'You may rely on it.',
	'As I see it, yes.',
	'Most likely.',
	'Outlook good.',
	'Yes.',
	'No.',
	'No way.',
	'My sources say no.',
	'Good Luck',
	'As I see it, yes.',
	'Hang on.',
	'Concentrate and ask again.',
	'Cannot predict now.',
	'My creator said I shouldn\'t answer that...',
];

export default {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Let Belle foresee your destiny!')
		.addStringOption(option => option.setName('question').setDescription('Please give me your question!').setRequired(true)),
	async execute(interaction: CommandInteraction) {
		const question = interaction.options.getString('question');
		if (!question) return new Error('Huh? I can\'t find the question!');
		const num = Math.floor(Math.random() * eightball.length);

		interaction.reply({ content: eightball[num] });
	},
};
