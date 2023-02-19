import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import of from './of';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('of6')
		.setDescription('Get a random image of a lot of OnlyFans actors! #Part 6')
		.addStringOption(option =>
			option.setName('actor')
				.setDescription('Select a actor!')
				.setRequired(false)
				.addChoices(
					{ name: 'Kelsie Carpenter', value: 'kelsie-carpenter' },
					{ name: 'Kirabee', value: 'Kirabee' },
					{ name: 'Kirabee2', value: 'kirabee2' },
					{ name: 'Kitkatsparrow', value: 'kitkatsparrow' },
					{ name: 'Kittenindian', value: 'kittenindian' },
					{ name: 'Kitty Cxxat', value: 'kitty-cxxat' },
					{ name: 'Kittyliixo', value: 'kittyliixo' },
					{ name: 'Koneko Mari', value: 'koneko-mari' },
					{ name: 'Konekocosplays', value: 'konekocosplays' },
					{ name: 'Kristen Hancher', value: 'kristen-hancher' },
					{ name: 'Kyaandere', value: 'kyaandere' },
					{ name: 'Lazyydaisy69', value: 'lazyydaisy69' },
					{ name: 'Leoniepur', value: 'leoniepur' },
					{ name: 'Lil Hanne', value: 'lil-hanne' },
					{ name: 'Lillyrae', value: 'lillyrae' },
					{ name: 'Littledaisy', value: 'littledaisy' },
					{ name: 'Littledaisybby', value: 'littledaisybby' },
					{ name: 'Littletastey', value: 'littletastey' },
					{ name: 'Livinia', value: 'livinia' },
					{ name: 'Lolaminavip', value: 'lolaminavip' },
					{ name: 'Lolitasimps', value: 'lolitasimps' },
					{ name: 'Lucillexs', value: 'lucillexs' },
					{ name: 'Luluspuppy', value: 'luluspuppy' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		of.execute(interaction);
	},
};
