import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

const roasts = [
	'is a hoe!',
	'is a bastard...',
	'has no friends',
	'is useless as a stone',
	'should die',
	'should shut up',
	'should go outside',
	'should touch grass',
];

export default {
	data: new SlashCommandBuilder()
		.setName('roast')
		.setDescription('Roast someone with Belle\'s help!')
		.addUserOption(option => option.setName('user').setDescription('Do you want to roast someone specific?').setRequired(true)),
	async execute(interaction: CommandInteraction) {
		const target = interaction.options.getUser('user');
		const executor = interaction.user;
		const num = Math.floor(Math.random() * roasts.length);
		if (!target) {return new Error('Huh? I can\'t find the member!');}
		else if (executor === target) {
			interaction.reply({ content: 'Sorry, you can\'t roast yourself...', ephemeral: true });
		}
		else {
			interaction.reply({ content: `Belle thinks <@${target.id}> ${roasts[num]}` });
		}
	},
};
