import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import of from './of';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('of9')
		.setDescription('Get a random image of a lot of OnlyFans actors! #Part 9')
		.addStringOption(option =>
			option.setName('actor')
				.setDescription('Select a actor!')
				.setRequired(false)
				.addChoices(
					{ name: 'Sadkitcat', value: 'sadkitcat' },
					{ name: 'Saffronbacchus', value: 'saffronbacchus' },
					{ name: 'Sairey Flattum', value: 'sairey-flattum' },
					{ name: 'Saraluvv', value: 'saraluvv' },
					{ name: 'Sashawonderr', value: 'sashawonderr' },
					{ name: 'Sayumemi', value: 'sayumemi' },
					{ name: 'Scarlettnior', value: 'scarlettnior' },
					{ name: 'Sedonasky', value: 'sedonasky' },
					{ name: 'Selaney Snyder', value: 'selaney-snyder' },
					{ name: 'Selti', value: 'selti' },
					{ name: 'Shaethefunnywhore', value: 'shaethefunnywhore' },
					{ name: 'Shecid Gallardo', value: 'shecid-gallardo' },
					{ name: 'Skiddykitty', value: 'skiddykitty' },
					{ name: 'Skylarmaexo', value: 'skylarmaexo' },
					{ name: 'Sofiallliaaxo', value: 'sofiallliaaxo' },
					{ name: 'Soph8983', value: 'soph8983' },
					{ name: 'Squishygushy', value: 'squishygushy' },
					{ name: 'Stellaviolet', value: 'stellaviolet' },
					{ name: 'Stormystorm', value: 'stormystorm' },
					{ name: 'Strawberrymilk', value: 'strawberrymilk' },
					{ name: 'Sunny Ray', value: 'sunny-ray' },
					{ name: 'Sweetsavy 19', value: 'sweetsavy-19' },
					{ name: 'Syd2003', value: 'syd2003' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		of.execute(interaction);
	},
};
