import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import belle from './belle';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('belle2')
		.setDescription('Get a random image of Belle! #Part 2')
		.addStringOption(option =>
			option.setName('theme')
				.setDescription('Select a optional theme!')
				.setRequired(false)
				.addChoices(
					{ name: 'First Post Back', value: 'first-post-back' },
					{ name: 'Rainbow Bunny', value: 'rainbow-bunny' },
					{ name: 'Gummy Monster', value: 'gummy-monster' },
					{ name: 'Lola Bunny', value: 'lola-bunny' },
					{ name: 'Candid Selfies', value: 'candid-selfies' },
					{ name: 'Please Swing Me', value: 'please-swing-me' },
					{ name: 'Belle cafe', value: 'belle-cafe' },
					{ name: 'Purple Crocs', value: 'purple-crocs' },
					{ name: 'Votes for Women', value: 'vforw' },
					{ name: 'Yellow Hat', value: 'yellow-hat' },
					{ name: 'Star Shirt', value: 'star-shirt' },
					{ name: 'Animal Crossing', value: 'ani-cross' },
					{ name: 'Lewd Elves', value: 'lewd-elves' },
					{ name: 'Bunny Picnic', value: 'bunny-picnic' },
					{ name: 'Fox Spirit Belle', value: 'fsb' },
					{ name: 'Bed Bunnies', value: 'bed-bunnies' },
					{ name: 'Feet Set', value: 'feet-set' },
					{ name: 'Impressing You', value: 'im-you' },
					{ name: 'Tomato Butt', value: 'tomato-butt' },
					{ name: 'Cheerleader', value: 'cheerleader' },
					{ name: 'Sunny Pussy', value: 'sunny-pussy' },
					{ name: 'Sunset Shadows', value: 'sun-shad' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		belle.execute(interaction);
	},
};
