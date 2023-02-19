import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import of from './of';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('of7')
		.setDescription('Get a random image of a lot of OnlyFans actors! #Part 7')
		.addStringOption(option =>
			option.setName('actor')
				.setDescription('Select a actor!')
				.setRequired(false)
				.addChoices(
					{ name: 'Luvcoregf', value: 'luvcoregf' },
					{ name: 'Maddie Snell', value: 'maddie-snell' },
					{ name: 'Maddy Belle', value: 'maddy-belle' },
					{ name: 'Maikeelenna', value: 'maikeelenna' },
					{ name: 'Maplemistyx', value: 'maplemistyx' },
					{ name: 'Marie X', value: 'marie-x' },
					{ name: 'Marissa', value: 'marissa' },
					{ name: 'Marli Alexa', value: 'marli-alexa' },
					{ name: 'Mary Nabokova', value: 'mary-nabokova' },
					{ name: 'Mayasnaked', value: 'mayasnaked' },
					{ name: 'Me1Adinha', value: 'me1adinha' },
					{ name: 'Megan Heaton', value: 'megan-heaton' },
					{ name: 'Megan Takamatsu', value: 'megan-takamatsu' },
					{ name: 'Meggii', value: 'meggii' },
					{ name: 'Meikoui', value: 'meikoui' },
					{ name: 'Melwood', value: 'melwood' },
					{ name: 'Mihobaby', value: 'mihobaby' },
					{ name: 'Mikilolipop', value: 'mikilolipop' },
					{ name: 'Mil Azul', value: 'mil-azul' },
					{ name: 'Milamontexo', value: 'milamontexo' },
					{ name: 'Milkgore', value: 'milkgore' },
					{ name: 'Mini Diva', value: 'mini-diva' },
					{ name: 'Minivamp', value: 'minivamp' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		of.execute(interaction);
	},
};
