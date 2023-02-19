import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import of from './of';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('of5')
		.setDescription('Get a random image of a lot of OnlyFans actors! #Part 5')
		.addStringOption(option =>
			option.setName('actor')
				.setDescription('Select a actor!')
				.setRequired(false)
				.addChoices(
					{ name: 'Fe Galvao', value: 'fe-galvao' },
					{ name: 'Fehmarks2', value: 'fehmarks2' },
					{ name: 'Gammaelle', value: 'gammaelle' },
					{ name: 'Gooddeemonn', value: 'gooddeemonn' },
					{ name: 'Greydidix', value: 'greydidix' },
					{ name: 'Haileyrose Fcks', value: 'haileyrose-fcks' },
					{ name: 'Hana', value: 'hana' },
					{ name: 'Hann Miller', value: 'hann-miller' },
					{ name: 'Hazard', value: 'hazard' },
					{ name: 'Hylialove', value: 'hylialove' },
					{ name: 'Indiefoxx', value: 'indiefoxx' },
					{ name: 'Isabelle Haris', value: 'isabelle-haris' },
					{ name: 'Islasummer', value: 'islasummer' },
					{ name: 'Itsnatdog', value: 'itsnatdog' },
					{ name: 'Itspatikayy', value: 'itspatikayy' },
					{ name: 'Itsprincesschloe', value: 'itsprincesschloe' },
					{ name: 'Ittybittykath', value: 'Ittybittykath' },
					{ name: 'Jazmen00', value: 'jazmen00' },
					{ name: 'Jennachew', value: 'jennachew' },
					{ name: 'Jordinswetof', value: 'jordinswetof' },
					{ name: 'Kadence Causey', value: 'kadence-causey' },
					{ name: 'Karol Rosado', value: 'karol-rosado' },
					{ name: 'Kaylie Blake', value: 'kaylie-blake' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		of.execute(interaction);
	},
};
