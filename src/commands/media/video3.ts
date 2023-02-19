import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import video from './video';

// TODO: Unfck this mess

export default {
	premium: true,
		data: new SlashCommandBuilder()
		.setName("video3")
		.setDescription("Get a random video from our gallery! #Part 3")
		.addStringOption((option) =>
		option
			.setName("actor")
			.setDescription("Select a optional actor!")
			.setRequired(false)
			.addChoices(
				{ name: 'Chanellebunny', value: 'CHANELLEBUNNY' },
				{ name: 'Chibi', value: 'CHIBI' },
				{ name: 'Chloe Cream', value: 'CHLOE CREAM' },
				{ name: 'Chloenight', value: 'CHLOENIGHT' },
				{ name: 'Coco Nady', value: 'COCO NADY' },
				{ name: 'Cocochanelfit', value: 'COCOCHANELFIT' },
				{ name: 'Coconut Kitty', value: 'COCONUT KITTY' },
				{ name: 'Cutebaby', value: 'CUTEBABY' },
				{ name: 'Daintywilde', value: 'DAINTYWILDE' },
				{ name: 'Daisycutie', value: 'DAISYCUTIE' },
				{ name: 'Deerbxby', value: 'DEERBXBY' },
				{ name: 'Destinilaspesa', value: 'DESTINILASPESA' },
				{ name: 'Desyyc', value: 'DESYYC' },
				{ name: 'Echokiri', value: 'ECHOKIRI' },
				{ name: 'Elena Kulichenko', value: 'ELENA KULICHENKO' },
				{ name: 'Elizarosewatson', value: 'ELIZAROSEWATSON' },
				{ name: 'Elliemarie', value: 'ELLIEMARIE' },
				{ name: 'Erzabelx', value: 'ERZABELX' },
				{ name: 'Eva Elfie', value: 'EVA ELFIE' },
				{ name: 'Fairydrey', value: 'FAIRYDREY' },
				{ name: 'Fairypie', value: 'FAIRYPIE' },
				{ name: 'Fe Galvao', value: 'FE GALVAO' },
				{ name: 'Fehmarks', value: 'FEHMARKS' },
				{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		video.execute(interaction);
	},
};
