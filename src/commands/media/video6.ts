import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import video from './video';

// TODO: Unfck this mess

export default {
	premium: true,
		data: new SlashCommandBuilder()
		.setName("video6")
		.setDescription("Get a random video from our gallery! #Part 6")
		.addStringOption((option) =>
		option
			.setName("actor")
			.setDescription("Select a optional actor!")
			.setRequired(false)
			.addChoices(
				{ name: 'Maddy Belle', value: 'MADDY BELLE' },
				{ name: 'Maikeelenna', value: 'MAIKEELENNA' },
				{ name: 'Maplemistyx', value: 'MAPLEMISTYX' },
				{ name: 'Marie X', value: 'MARIE X' },
				{ name: 'Marissa', value: 'MARISSA' },
				{ name: 'Marli Alexa', value: 'MARLI ALEXA' },
				{ name: 'Mayasnaked', value: 'MAYASNAKED' },
				{ name: 'MeAdinha', value: 'MEADINHA' },
				{ name: 'Megan Heaton', value: 'MEGAN HEATON' },
				{ name: 'Megan Takamatsu', value: 'MEGAN TAKAMATSU' },
				{ name: 'Meikoui', value: 'MEIKOUI' },
				{ name: 'Mikilolipop', value: 'MIKILOLIPOP' },
				{ name: 'Mil Azul', value: 'MIL AZUL' },
				{ name: 'Milamontexo', value: 'MILAMONTEXO' },
				{ name: 'Milkgore', value: 'MILKGORE' },
				{ name: 'Mini Diva', value: 'MINI DIVA' },
				{ name: 'Minidiva', value: 'MINIDIVA' },
				{ name: 'Mireiap', value: 'MIREIAP' },
				{ name: 'Missintights', value: 'MISSINTIGHTS' },
				{ name: 'Moxxi Morgan', value: 'MOXXI MORGAN' },
				{ name: 'Msbarbie', value: 'MSBARBIE' },
				{ name: 'Mycherrycrush', value: 'MYCHERRYCRUSH' },
				{ name: 'Nadine Granata', value: 'NADINE GRANATA' },
				{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		video.execute(interaction);
	},
};
