import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import video from './video';

// TODO: Unfck this mess

export default {
	premium: true,
		data: new SlashCommandBuilder()
		.setName("video5")
		.setDescription("Get a random video from our gallery! #Part 5")
		.addStringOption((option) =>
		option
			.setName("actor")
			.setDescription("Select a optional actor!")
			.setRequired(false)
			.addChoices(
				{ name: 'Kittenindian', value: 'KITTENINDIAN' },
				{ name: 'Kitty Cxxat', value: 'KITTY CXXAT' },
				{ name: 'Kittyliixo', value: 'KITTYLIIXO' },
				{ name: 'Kirabee', value: 'KIRABEE' },
				{ name: 'Koneko Mari', value: 'KONEKO MARI' },
				{ name: 'Konekocosplays', value: 'KONEKOCOSPLAYS' },
				{ name: 'Kristen Hancher', value: 'KRISTEN HANCHER' },
				{ name: 'Kyaandere', value: 'KYAANDERE' },
				{ name: 'Lazyydaisy', value: 'LAZYYDAISY' },
				{ name: 'Leoniepur', value: 'LEONIEPUR' },
				{ name: 'Lil Hanne', value: 'LIL HANNE' },
				{ name: 'Lillyrae', value: 'LILLYRAE' },
				{ name: 'Littledaisy', value: 'LITTLEDAISY' },
				{ name: 'Littledaisybby', value: 'LITTLEDAISYBBY' },
				{ name: 'Littletastey', value: 'LITTLETASTEY' },
				{ name: 'Littlmisfit', value: 'LITTLMISFIT' },
				{ name: 'Livinia', value: 'LIVINIA' },
				{ name: 'Lolaminavip', value: 'LOLAMINAVIP' },
				{ name: 'Lolitasimps', value: 'LOLITASIMPS' },
				{ name: 'Lucillexs', value: 'LUCILLEXS' },
				{ name: 'Luluspuppy', value: 'LULUSPUPPY' },
				{ name: 'Luvcoregf', value: 'LUVCOREGF' },
				{ name: 'Maddie Snell', value: 'MADDIE SNELL' },
				{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {
		video.execute(interaction);
	},
};
