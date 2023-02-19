import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction } from 'discord.js';
import { BelleClient } from '../..';

export default {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('General Help Command'),
	async execute(interaction: CommandInteraction, client: BelleClient) {
		const Embed = new MessageEmbed()
			.setTitle('Belle Delphine | Help')
			.setDescription('With this bot you get access to hundreds of thousands of pictures and videos of OnlyFans actresses! We even offer you a video platform on our website!')
			.addField('\u200B', '\u200B')
			.setColor('#de00c4')
			.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });

		for (const command of client.commands.values()) {
			Embed.addField(`/${command.default.data.name}`, command.default.data.description, true);
		}

		Embed.addField('\u200B', '\u200B');
		interaction.reply({ embeds: [Embed] });
	},
};
