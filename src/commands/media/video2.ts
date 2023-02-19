import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import video from './video';

// TODO: Unfck this mess

export default {
	premium: true,
		data: new SlashCommandBuilder()
		.setName("video2")
		.setDescription("Get a random video from our gallery! #Part 2")
		.addStringOption((option) =>
		option
			.setName("actor")
			.setDescription("Select a optional actor!")
			.setRequired(false)
			.addChoices(
				{ name: 'Audreyandsadie', value: 'AUDREYANDSADIE' },
				{ name: 'August Laines', value: 'AUGUST LAINES' },
				{ name: 'Ava Grace', value: 'AVA GRACE' },
				{ name: 'Avaxreyes', value: 'AVAXREYES' },
				{ name: 'Babyfooji', value: 'BABYFOOJI' },
				{ name: 'Babymox', value: 'BABYMOX' },
				{ name: 'Bananasavannah', value: 'BANANASAVANNAH' },
				{ name: 'Beachbbyxxx', value: 'BEACHBBYXXX' },
				{ name: 'Bellamay', value: 'BELLAMAY' },
				{ name: 'Belle Delphine', value: 'BELLE DELPHINE' },
				{ name: 'Bethrwn', value: 'BETHRWN' },
				{ name: 'Betterbeclaire', value: 'BETTERBECLAIRE' },
				{ name: 'Bigboootyari', value: 'BIGBOOOTYARI' },
				{ name: 'Brattyydeath', value: 'BRATTYYDEATH' },
				{ name: 'Breezy', value: 'BREEZY' },
				{ name: 'Brooke', value: 'BROOKE' },
				{ name: 'Bunnyszn', value: 'BUNNYSZN' },
				{ name: 'Caitlin', value: 'CAITLIN' },
				{ name: 'Canbebought', value: 'CANBEBOUGHT' },
				{ name: 'Candela Devesa', value: 'CANDELA DEVESA' },
				{ name: 'Catkitty', value: 'CATKITTY' },
				{ name: 'Catsandruskiprivate', value: 'CATSANDRUSKIPRIVATE' },
				{ name: 'Chanelbestcoast', value: 'CHANELBESTCOAST' },
				{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		video.execute(interaction);
	},
};
