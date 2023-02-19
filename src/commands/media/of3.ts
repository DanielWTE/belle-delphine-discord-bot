import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import of from './of';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('of3')
		.setDescription('Get a random image of a lot of OnlyFans actors! #Part 3')
		.addStringOption(option =>
			option.setName('actor')
				.setDescription('Select a actor!')
				.setRequired(false)
				.addChoices(
					{ name: 'Arilaviee', value: 'arilaviee' },
					{ name: 'Asianmochi', value: 'asianmochi' },
					{ name: 'Aspenirl', value: 'aspenirl' },
					{ name: 'Audreyandsadie', value: 'audreyandsadie' },
					{ name: 'August Laines', value: 'august-laines' },
					{ name: 'Ava Grace', value: 'ava-grace' },
					{ name: 'Avaxreyes', value: 'avaxreyes' },
					{ name: 'Babyfooji', value: 'babyfooji' },
					{ name: 'Babymox', value: 'babymox' },
					{ name: 'Bananasavannah101', value: 'bananasavannah101' },
					{ name: 'Beachbbyxxx', value: 'beachBbyxxx' },
					{ name: 'Bellamay1', value: 'bellamay1' },
					{ name: 'Bethrwn', value: 'bethrwn' },
					{ name: 'Betterbeclaire', value: 'betterbeclaire' },
					{ name: 'Bigboootyari', value: 'bigboootyari' },
					{ name: 'Brattyydeath', value: 'brattyydeath' },
					{ name: 'Breezy', value: 'breezy' },
					{ name: 'Brooke956', value: 'brooke956' },
					{ name: 'Bunnyszn', value: 'bunnyszn' },
					{ name: 'Caitlin', value: 'caitlin' },
					{ name: 'Canbebought', value: 'canbebought' },
					{ name: 'Candela Devesa', value: 'candela-devesa' },
					{ name: 'Catkitty21', value: 'catkitty21' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		of.execute(interaction);
	},
};
