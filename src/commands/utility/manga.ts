import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction } from 'discord.js';
import { get } from 'request-promise-native';

// TODO: Unfck this mess

export default {
	data: new SlashCommandBuilder()
		.setName('manga')
		.setDescription('Get information about manga!')
		.addStringOption(option => option.setName('manga').setDescription('The manga\'s name').setRequired(true)),
	async execute(interaction: CommandInteraction) {
		const userInput = interaction.options.getString('manga');

		const option = {
			url: ('https://kitsu.io/api/edge/manga?filter[text]=' + userInput),
			method: 'GET',
			headers: {
				'Content-Type': 'application/vnd.api+json',
				'Accept': 'application/vnd.api+json',
			},
			json: true,
		};

		try {
			get(option).then((man: any) => {
				// API Checkup
				// console.log(man.data[0])

				const data = man?.data[0]?.attributes;

				if (data) {

					for (const k in data) {
						if (data[k] === null) {
							data[k] = 'N/A';
						}
					}


					const Embed = new MessageEmbed()
						.setTitle(data.titles.en_jp)
						.setURL('https://kitsu.io/manga/' + man.data[0].id)
						.setDescription(data.description)
						.setThumbnail(data.posterImage.original)
						.addFields(
							{ name: '\u200B', value: '\u200B' },
							{ name: '⏳ Status', value: data.status, inline: true },
							{ name: '🗂 Type', value: data.subtype, inline: true },
							{ name: '🗓 Published', value:'from **' + data.startDate + '** to **' + man.data[0].attributes.endDate + '**' },
							{ name: '📰 Chapters', value: data.chapterCount.toString(), inline: true },
							{ name: '📚 Volumes', value: data.volumeCount.toString(), inline: true },
							{ name: '⭐ Average Rating', value: '**' + data.averageRating + '**', inline: true },
							{ name: '🏆 Rank', value: data.ratingRank.toString() },
						)
						.setColor('#de00c4')
						.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });
					interaction.reply({ embeds: [Embed] });
				}
				else {
					return interaction.reply({ content: 'Sorry, I can\'t find a manga called like this...', ephemeral: true });
				}
			});
		}
		catch (error) {
			console.log(error);
		}
	},
};
