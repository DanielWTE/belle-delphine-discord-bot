import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';

// TODO: Unfck this mess

export default {
	data: new SlashCommandBuilder()
		.setName('of')
		.setDescription('Get a random image of a lot of OnlyFans actors! #Part 1')
		.addStringOption(option =>
			option.setName('actor')
				.setDescription('Select a actor!')
				.setRequired(false)
				.addChoices(
					{ name: 'Starrrfyre', value: 'starrrfyre' },
					{ name: 'Linneas Life', value: 'linneaslife' },
					{ name: 'Fox & Yuliya', value: 'foxandyuliya' },
					{ name: 'Moodyjes', value: 'moodyjes' },
					{ name: 'Alyssa Griffith', value: 'alyssa-griffith' },
					{ name: 'Astasiadream', value: 'astasiadream' },
					{ name: 'Zureeal', value: 'zureeal' },
					{ name: 'lilyinthevalleyy', value: 'lilyinthevalleyy' },
					{ name: 'Kalinka Fox', value: 'kalinka-fox' },
					{ name: 'Takeomeow', value: 'takeomeow' },
					{ name: 'Hinaughtya', value: 'hinaughtya' },
					{ name: 'Burch Sisters', value: 'burch-sisters' },
					{ name: 'HeyImBee', value: 'heyimbee' },
					{ name: 'Alice Delish', value: 'alice-delish' },
					{ name: 'Taigateatime', value: 'taigateatime' },
					{ name: 'Sunnyrayxo', value: 'sunnyrayxo' },
					{ name: 'Bambiskii', value: 'bambiskii' },
					{ name: 'Alinity', value: 'alinity' },
					{ name: 'Indigo White', value: 'indigo-white' },
					{ name: 'Littlespoonz', value: 'littlespoonz' },
					{ name: 'Rolyatylor', value: 'rolyatylor' },
					{ name: 'Darshelle Stevens', value: 'darshelle-stevens' },
					{ name: 'funsizedasian', value: 'funsizedasian' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {

		try {
			const actor = interaction.isCommand() ? interaction.options.getString('actor') : interaction.customId.split(':')[1];

			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('like')
						.setLabel('Like')
						.setStyle('SUCCESS')
						.setEmoji('989204410477445150'),
					new MessageButton()
						.setCustomId('of:' + actor || '')
						.setLabel('Get more')
						.setStyle('PRIMARY'),
				);

			if (actor === 'donate') {
				await interaction.reply({ content: 'If you want more, sign up for a subscription - and get access to many more features! \n\n https://store.belledelphine.gg/', ephemeral: true });
			}
			else if (actor && actor !== 'null') {
				await interaction.reply({ content: 'Your photo is in the queue...' });
				const options = {
					url: (process.env.cdnBasePath + '/api/of/actors/' + actor + '/'),
					method: 'GET',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': process.env.cdnApiAuth,
					},
					json: true,
				};

				get(options).then(async actorId => {
					const Embed = new MessageEmbed()
						.setImage(actorId.imgUrl)
						.setDescription(':person_tipping_hand: Actor: ' + actorId.actor)
						.setColor('#de00c4')
						.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });
					if (interaction.channel instanceof TextChannel && interaction.channel.nsfw) {
						row.components[0].setCustomId('like?' + actorId.imgLocal);
						row.addComponents(new MessageButton()
							.setCustomId('report?' + actorId.imgLocal)
							.setLabel('Report')
							.setStyle('DANGER'));
						await interaction.editReply({ content: ' ', embeds: [Embed], components: [row] });
					}
					else {
						interaction.editReply({ content: 'This command can only be used in NSFW channels!' });
					}
				});

			}
			else {
				await interaction.reply({ content: 'Your photo is in the queue...' });
				const options = {
					url: (process.env.cdnBasePath + '/api/of/photos/'),
					method: 'GET',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': process.env.cdnApiAuth,
					},
					json: true,
				};
				get(options).then(async photoId => {
					const Embed = new MessageEmbed()
						.setImage(photoId.imgUrl)
						.setDescription(':person_tipping_hand: Actor: ' + photoId.actor)
						.setColor('#de00c4')
						.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });

					if (interaction.channel instanceof TextChannel && interaction.channel.nsfw) {
						row.components[0].setCustomId('like?' + photoId.imgLocal);
						row.addComponents(new MessageButton()
							.setCustomId('report?' + photoId.imgLocal)
							.setLabel('Report')
							.setStyle('DANGER'));
						await interaction.editReply({ content: ' ', embeds: [Embed], components: [row] });
					}
					else {
						interaction.editReply({ content: 'This command can only be used in NSFW channels!' });
					}
				});
			}
		}
		catch (error:any) {
			await interaction.followUp({ content: 'Huh? There was a small problem on our side, please request a new image. If this error occurs more often, please write a bug report!', ephemeral: true });
		}
	},
};
