import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction } from 'discord.js';
import { get } from 'request-promise-native';

export default {
	data: new SlashCommandBuilder()
		.setName('anime')
		.setDescription('Get information about anime!')
		.addStringOption(option => option.setName('anime').setDescription('The anime\'s name').setRequired(true)),
	async execute(interaction: CommandInteraction) {
		const userInput = interaction.options.getString('anime');


		const option = {
			url: ('https://kitsu.io/api/edge/anime?filter[text]=' + userInput),
			method: 'GET',
			headers: {
				'Content-Type': 'application/vnd.api+json',
				'Accept': 'application/vnd.api+json',
			},
			json: true,
		};

		try {
			get(option).then(ani => {
				// API Checkup
				// console.log(ani.data[0])

				const data = ani?.data[0]?.attributes;

				if (data) {

					for (const k in data) {
						if (data[k] === null) {
							data[k] = 'N/A';
						}
					}

					const Embed = new MessageEmbed()
						.setTitle(data.titles.en_jp)
						.setURL('https://kitsu.io/anime/' + ani.data[0].id)
						.setDescription(data.description)
						.setThumbnail(data.posterImage.original)
						.addFields(
							{ name: '\u200B', value: '\u200B' },
							{ name: '⏳ Status', value: data.status, inline: true },
							{ name: '🗂 Type', value: data.subtype, inline: true },
							{ name: '🗓 Aired', value:'from **' + data.startDate + '** to **' + data.endDate + '**' },
							{ name: '💽 Episodes', value: data.episodeCount.toString(), inline: true },
							{ name: '⏱ Duration', value: data.episodeLength.toString() + ' min', inline: true },
							{ name: '⭐ Average Rating', value: '**' + data.averageRating + '**', inline: true },
							{ name: '🏆 Rank', value: data.ratingRank.toString() },
						)
						.setColor('#de00c4')
						.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });
					interaction.reply({ embeds: [Embed] });
				}
				else {
					interaction.reply({ content: 'Sorry, I can\'t find an anime called like this...', ephemeral: true });
				}
			});
		}
		catch (error) {
			console.log(error);
		}
	},
};
