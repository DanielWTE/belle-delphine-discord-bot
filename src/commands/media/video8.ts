import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import video from './video';

// TODO: Unfck this mess

export default {
	premium: true,
		data: new SlashCommandBuilder()
		.setName("video8")
		.setDescription("Get a random video from our gallery! #Part 8")
		.addStringOption((option) =>
		option
			.setName("actor")
			.setDescription("Select a optional actor!")
			.setRequired(false)
			.addChoices(
				{ name: 'Scarlettnior', value: 'SCARLETTNIOR' },
				{ name: 'Sedonasky', value: 'SEDONASKY' },
				{ name: 'Selti', value: 'SELTI' },
				{ name: 'Shaethefunnywhore', value: 'SHAETHEFUNNYWHORE' },
				{ name: 'Shecid Gallardo', value: 'SHECID GALLARDO' },
				{ name: 'Skiddykitty', value: 'SKIDDYKITTY' },
				{ name: 'Skylarmaexo', value: 'SKYLARMAEXO' },
				{ name: 'Sofiallliaaxo', value: 'SOFIALLLIAAXO' },
				{ name: 'Soph', value: 'SOPH' },
				{ name: 'Squishygushy', value: 'SQUISHYGUSHY' },
				{ name: 'Stellaviolet', value: 'STELLAVIOLET' },
				{ name: 'Stormystorm', value: 'STORMYSTORM' },
				{ name: 'Strawberrymilk', value: 'STRAWBERRYMILK' },
				{ name: 'Sunny Ray', value: 'SUNNY RAY' },
				{ name: 'Sweetsavy ', value: 'SWEETSAVY ' },
				{ name: 'Syd', value: 'SYD' },
				{ name: 'Tessa Winters', value: 'TESSA WINTERS' },
				{ name: 'Thesabrinabankss', value: 'THESABRINABANKSS' },
				{ name: 'Thesaraames', value: 'THESARAAMES' },
				{ name: 'Tinyarab', value: 'TINYARAB' },
				{ name: 'Tinywaistemma', value: 'TINYWAISTEMMA' },
				{ name: 'Tsunderebean', value: 'TSUNDEREBEAN' },
				{ name: 'Txkitty', value: 'TXKITTY' },
				{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		video.execute(interaction);
	},
};
