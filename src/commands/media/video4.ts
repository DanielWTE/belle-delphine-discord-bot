import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import video from './video';

// TODO: Unfck this mess

export default {
	premium: true,
		data: new SlashCommandBuilder()
		.setName("video4")
		.setDescription("Get a random video from our gallery! #Part 4")
		.addStringOption((option) =>
		option
			.setName("actor")
			.setDescription("Select a optional actor!")
			.setRequired(false)
			.addChoices(
				{ name: 'Funsizedasian', value: 'FUNSIZEDASIAN' },
				{ name: 'Gammaelle', value: 'GAMMAELLE' },
				{ name: 'Gooddeemonn', value: 'GOODDEEMONN' },
				{ name: 'Greydidix', value: 'GREYDIDIX' },
				{ name: 'Haileyrose Fcks', value: 'HAILEYROSE FCKS' },
				{ name: 'Hana', value: 'HANA' },
				{ name: 'Hann Miller', value: 'HANN MILLER' },
				{ name: 'Hazard', value: 'HAZARD' },
				{ name: 'Hylialove', value: 'HYLIALOVE' },
				{ name: 'Indiefoxx', value: 'INDIEFOXX' },
				{ name: 'Isabelle Haris', value: 'ISABELLE HARIS' },
				{ name: 'Islasummer', value: 'ISLASUMMER' },
				{ name: 'Itsnatdog', value: 'ITSNATDOG' },
				{ name: 'Itspatikayy', value: 'ITSPATIKAYY' },
				{ name: 'Itsprincesschloe', value: 'ITSPRINCESSCHLOE' },
				{ name: 'Ittybittykath', value: 'ITTYBITTYKATH' },
				{ name: 'Jazmen', value: 'JAZMEN' },
				{ name: 'Jennachew', value: 'JENNACHEW' },
				{ name: 'Jordinswetof', value: 'JORDINSWETOF' },
				{ name: 'Kadence Causey', value: 'KADENCE CAUSEY' },
				{ name: 'Kelsie Carpenter', value: 'KELSIE CARPENTER' },
				{ name: 'Kirabee', value: 'KIRABEE' },
				{ name: 'Kitkatsparrow', value: 'KITKATSPARROW' },
				{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		video.execute(interaction);
	},
};
