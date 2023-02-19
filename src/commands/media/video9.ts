import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import video from './video';

// TODO: Unfck this mess

export default {
	premium: true,
		data: new SlashCommandBuilder()
		.setName("video9")
		.setDescription("Get a random video from our gallery! #Part 9")
		.addStringOption((option) =>
		option
			.setName("actor")
			.setDescription("Select a optional actor!")
			.setRequired(false)
			.addChoices(
				{ name: 'Uniquesora', value: 'UNIQUESORA' },
				{ name: 'Urbabydollxo', value: 'URBABYDOLLXO' },
				{ name: 'Vanessa Taylor', value: 'VANESSA TAYLOR' },
				{ name: 'Veronica Perasso', value: 'VERONICA PERASSO' },
				{ name: 'Violet Summers', value: 'VIOLET SUMMERS' },
				{ name: 'Vivi Tarantino', value: 'VIVI TARANTINO' },
				{ name: 'Vyvanle', value: 'VYVANLE' },
				{ name: 'Xosarahx', value: 'XOSARAHX' },
				{ name: 'Yardenlasry', value: 'YARDENLASRY' },
				{ name: 'Yus Lopez', value: 'YUS LOPEZ' },
				{ name: 'Zoe Gara', value: 'ZOE GARA' },
				{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		video.execute(interaction);
	},
};
