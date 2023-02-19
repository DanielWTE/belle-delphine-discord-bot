import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import of from './of';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('of10')
		.setDescription('Get a random image of a lot of OnlyFans actors! #Part 10')
		.addStringOption(option =>
			option.setName('actor')
				.setDescription('Select a actor!')
				.setRequired(false)
				.addChoices(
					{ name: 'Tessa Winters', value: 'tessa-winters' },
					{ name: 'Thesabrinabankss', value: 'thesabrinabankss' },
					{ name: 'Thesaraames', value: 'thesaraames' },
					{ name: 'Tinyarab', value: 'tinyarab' },
					{ name: 'Tinywaistemma', value: 'tinywaistemma' },
					{ name: 'Tsunderebean', value: 'tsunderebean' },
					{ name: 'Txkitty69', value: 'txkitty69' },
					{ name: 'Uniquesora', value: 'uniquesora' },
					{ name: 'Urbabydollxo', value: 'urbabydollxo' },
					{ name: 'Vanessa Taylor', value: 'vanessa-taylor' },
					{ name: 'Veronica Perasso', value: 'veronica-perasso' },
					{ name: 'Vivi Tarantino', value: 'vivi-tarantino' },
					{ name: 'Vyvanle', value: 'vyvanle' },
					{ name: 'Yardenlasry', value: 'yardenlasry' },
					{ name: 'Yus Lopez', value: 'yus-lopez' },
					{ name: 'Zoe Gara', value: 'zoe-gara' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		of.execute(interaction);
	},
};
