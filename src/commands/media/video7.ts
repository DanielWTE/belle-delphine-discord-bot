import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import video from './video';

// TODO: Unfck this mess

export default {
	premium: true,
		data: new SlashCommandBuilder()
		.setName("video7")
		.setDescription("Get a random video from our gallery! #Part 7")
		.addStringOption((option) =>
		option
			.setName("actor")
			.setDescription("Select a optional actor!")
			.setRequired(false)
			.addChoices(
				{ name: 'Nelima', value: 'NELIMA' },
				{ name: 'Nextdoorvixen', value: 'NEXTDOORVIXEN' },
				{ name: 'Nikkilafae', value: 'NIKKILAFAE' },
				{ name: 'Notashamiller', value: 'NOTASHAMILLER' },
				{ name: 'Notyouraveragesisterz', value: 'NOTYOURAVERAGESISTERZ' },
				{ name: 'Onibabi', value: 'ONIBABI' },
				{ name: 'Only Dany', value: 'ONLY DANY' },
				{ name: 'OreobBy', value: 'OREOBBY' },
				{ name: 'OreobBy', value: 'OREOBBY' },
				{ name: 'Phiasco', value: 'PHIASCO' },
				{ name: 'Plaksaw', value: 'PLAKSAW' },
				{ name: 'Pollythejew', value: 'POLLYTHEJEW' },
				{ name: 'Princesa Arii', value: 'PRINCESA ARII' },
				{ name: 'Ratskeleton', value: 'RATSKELETON' },
				{ name: 'Realskybri', value: 'REALSKYBRI' },
				{ name: 'Rose Cassidy', value: 'ROSE CASSIDY' },
				{ name: 'Rylie Rowan', value: 'RYLIE ROWAN' },
				{ name: 'Sadkitcat', value: 'SADKITCAT' },
				{ name: 'Saffronbacchus', value: 'SAFFRONBACCHUS' },
				{ name: 'Sairey Flattum', value: 'SAIREY FLATTUM' },
				{ name: 'Saraluvv', value: 'SARALUVV' },
				{ name: 'Sashawonderr', value: 'SASHAWONDERR' },
				{ name: 'Sayumemi', value: 'SAYUMEMI' },
				{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		video.execute(interaction);
	},
};
