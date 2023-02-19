import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import of from './of';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('of8')
		.setDescription('Get a random image of a lot of OnlyFans actors! #Part 8')
		.addStringOption(option =>
			option.setName('actor')
				.setDescription('Select a actor!')
				.setRequired(false)
				.addChoices(
					{ name: 'Mireiap19', value: 'mireiap19' },
					{ name: 'Missintights', value: 'missintights' },
					{ name: 'Moxxi Morgan', value: 'moxxi-morgan' },
					{ name: 'Msbarbie69', value: 'msbarbie69' },
					{ name: 'Multi Pack', value: 'multi-pack' },
					{ name: 'Mycherrycrush', value: 'mycherrycrush' },
					{ name: 'Nadine Granata', value: 'nadine-granata' },
					{ name: 'Nelima', value: 'nelima' },
					{ name: 'Nextdoorvixen', value: 'nextdoorvixen' },
					{ name: 'Nikkilafae', value: 'nikkilafae' },
					{ name: 'Notashamiller', value: 'notashamiller' },
					{ name: 'Notyouraveragesisterz', value: 'notyouraveragesisterz' },
					{ name: 'Onibabi', value: 'onibabi' },
					{ name: 'Only Dany', value: 'only-dany' },
					{ name: 'Oreob4By', value: 'oreob4by' },
					{ name: 'Phiasco', value: 'phiasco' },
					{ name: 'Plaksaw', value: 'plaksaw' },
					{ name: 'Pollythejew', value: 'pollythejew' },
					{ name: 'Princesa Arii', value: 'princesa-arii' },
					{ name: 'Random Stuff', value: 'random-stuff' },
					{ name: 'Ratskeleton', value: 'ratskeleton' },
					{ name: 'Rose Cassidy', value: 'rose-cassidy' },
					{ name: 'Rylie Rowan', value: 'rylie-rowan' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		of.execute(interaction);
	},
};
