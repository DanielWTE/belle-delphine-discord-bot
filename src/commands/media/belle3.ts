import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import belle from './belle';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('belle3')
		.setDescription('Get a random image of Belle! #Part 3')
		.addStringOption(option =>
			option.setName('theme')
				.setDescription('Select a optional theme!')
				.setRequired(false)
				.addChoices(
					{ name: 'Nokia Delphine', value: 'nokia-hine' },
					{ name: 'Water Nymph', value: 'water-nymph' },
					{ name: 'Blessed by Nature', value: 'bbn' },
					{ name: 'Lewd Walk', value: 'lewd-walk' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		belle.execute(interaction);
	},
};
