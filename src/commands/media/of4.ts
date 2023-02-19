import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import of from './of';

// TODO: Unfck this mess

export default {
	premium: true,
	data: new SlashCommandBuilder()
		.setName('of4')
		.setDescription('Get a random image of a lot of OnlyFans actors! #Part 4')
		.addStringOption(option =>
			option.setName('actor')
				.setDescription('Select a actor!')
				.setRequired(false)
				.addChoices(
					{ name: 'Catsandruskiprivate', value: 'catsandruskiprivate' },
					{ name: 'Chanelbestcoast', value: 'chanelbestcoast' },
					{ name: 'Chanellebunny', value: 'chanellebunny' },
					{ name: 'Chibi1311', value: 'chibi1311' },
					{ name: 'Chloe Cream', value: 'chloe-cream' },
					{ name: 'Chloenight', value: 'chloenight' },
					{ name: 'Coco Nady', value: 'coco-nady' },
					{ name: 'Cocochanelfit', value: 'cocochanelfit' },
					{ name: 'Coconut Kitty', value: 'coconut-kitty' },
					{ name: 'Csblondebombshell', value: 'csblondebombshell' },
					{ name: 'Cutebaby0', value: 'cutebaby0' },
					{ name: 'Daintywilde', value: 'daintywilde' },
					{ name: 'Daisycutie', value: 'daisycutie' },
					{ name: 'Deerbxby', value: 'deerbxby' },
					{ name: 'Destinilaspesa', value: 'destinilaspesa' },
					{ name: 'Desyyc', value: 'desyyc' },
					{ name: 'Echokiri', value: 'echokiri' },
					{ name: 'Elena Kulichenko', value: 'elena-kulichenko' },
					{ name: 'Elizarosewatson', value: 'elizarosewatson' },
					{ name: 'Elliemarie138', value: 'elliemarie138' },
					{ name: 'Erzabelx', value: 'erzabelx' },
					{ name: 'Fairydrey', value: 'fairydrey' },
					{ name: 'Fairypie', value: 'fairypie' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		of.execute(interaction);
	},
};
