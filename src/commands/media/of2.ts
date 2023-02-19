import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import of from './of';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('of2')
		.setDescription('Get a random image of a lot of OnlyFans actors! #Part 2')
		.addStringOption(option =>
			option.setName('actor')
				.setDescription('Select a actor!')
				.setRequired(false)
				.addChoices(
					{ name: 'RealSkyBri', value: 'realskybri' },
					{ name: 'Ava Bonilla', value: 'ava-bonilla' },
					{ name: 'Autumn Ren', value: 'autumn-ren' },
					{ name: 'Ariesiaxo', value: 'ariesiaxo' },
					{ name: 'Abn0Rmalxo', value: 'abn0rmalxo' },
					{ name: 'Aiwa Only', value: 'aiwa-only' },
					{ name: 'Alea Vi', value: 'alea-vi' },
					{ name: 'Aleebabe', value: 'aleebabe' },
					{ name: 'Alexandra Mora', value: 'alexandra-mora' },
					{ name: 'Alice Swe', value: 'alice-swe' },
					{ name: 'Alinarose9', value: 'alinarose9' },
					{ name: 'Ally Sk', value: 'ally-sk' },
					{ name: 'Alyri', value: 'alyri' },
					{ name: 'Amber Madison', value: 'amber-madison' },
					{ name: 'Ambermarieexoxo', value: 'ambermarieexoxo' },
					{ name: 'Amirabrie', value: 'amirabrie' },
					{ name: 'Amyyyy007', value: 'amyyyy007' },
					{ name: 'Anastasiajadore', value: 'anastasiajadore' },
					{ name: 'Ang3Lcqke', value: 'ang3lcqke' },
					{ name: 'Angela Halee', value: 'angela-halee' },
					{ name: 'Arabell', value: 'arabell' },
					{ name: 'Ariana Diamond', value: 'ariana-diamond' },
					{ name: 'Arianamumtaz', value: 'arianamumtaz' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		of.execute(interaction);
	},
};
