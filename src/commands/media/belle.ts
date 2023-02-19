import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';

// TODO: Unfck this mess

export default {
	data: new SlashCommandBuilder()
		.setName('belle')
		.setDescription('Get a random image of Belle! #Part 1')
		.addStringOption(option =>
			option.setName('theme')
				.setDescription('Select a optional theme!')
				.setRequired(false)
				.addChoices(
					{ name: 'Army', value: 'army' },
					{ name: 'Banana', value: 'banana' },
					{ name: 'Bath', value: 'bath' },
					{ name: 'Blue Kitty', value: 'blue-kitty' },
					{ name: 'Bunny', value: 'bunny' },
					{ name: 'Christmas', value: 'christmas' },
					{ name: 'Earth-Chan', value: 'earth-chan' },
					{ name: 'Gamer', value: 'gamer' },
					{ name: 'Kitten', value: 'kitten' },
					{ name: 'Miku', value: 'miku' },
					{ name: 'Purple Hair', value: 'purple-hair' },
					{ name: 'QT Dragon Maid', value: 'qt-dragon-maid' },
					{ name: 'Shimikaze', value: 'shimikaze' },
					{ name: 'Violet', value: 'violet' },
					{ name: 'Secret Place', value: 'secret-place' },
					{ name: 'Casual Outfit', value: 'casual-outfit' },
					{ name: 'Pixie', value: 'pixie' },
					{ name: 'Naked Princess', value: 'naked-princess' },
					{ name: 'Daisy', value: 'daisy' },
					{ name: 'I want more!', value: 'donate' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {

		try {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('like')
						.setLabel('Like')
						.setStyle('SUCCESS')
						.setEmoji('989204410477445150'),
				);

			let theme: string | null = null;

			if (interaction.isCommand()) {
				theme = interaction.options.getString('theme');
			}
			else if (interaction.customId.startsWith('themeBelle')) {
				theme = interaction.customId.split(':')[1];
			}


			if (theme === 'donate') {
				await interaction.reply({ content: 'If you want more, sign up for a subscription - and get access to many more features! \n\n https://store.belledelphine.gg/', ephemeral: true });
			}
			else if (theme) {
				await interaction.reply({ content: 'Your photo is in the queue...' });
				const options = {
					url: (process.env.cdnBasePath + '/api/belle/themes/' + theme + '/'),
					method: 'GET',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': process.env.cdnApiAuth,
					},
					json: true,
				};

				row.addComponents(
					new MessageButton()
						.setCustomId('themeBelle:' + theme)
						.setLabel('Get more')
						.setStyle('PRIMARY'),
				);

				get(options).then(async themeId => {
					const Embed = new MessageEmbed()
						.setImage(themeId.imgUrl)
						.setColor('#de00c4')
						.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });
					row.addComponents([new MessageButton()
						.setCustomId('report?' + themeId.imgLocal)
						.setLabel('Report')
						.setStyle('DANGER')],
					);
					if (interaction.channel instanceof TextChannel && interaction.channel.nsfw) {
						row.components[0].setCustomId('like?' + themeId.imgLocal);
						await interaction.editReply({ content: ' ', embeds: [Embed], components: [row] });
					}
					else {
						interaction.editReply({ content: 'This command can only be used in NSFW channels!' });
					}
				});

			}
			else {
				await interaction.reply({ content: 'Your photo is in the queue...' });

				row.addComponents(
					new MessageButton()
						.setCustomId('slashBelle')
						.setLabel('Get more')
						.setStyle('PRIMARY'),
				);

				const options = {
					url: (process.env.cdnBasePath + '/api/belle/photos/'),
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
						.setColor('#de00c4')
						.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });

					row.addComponents([new MessageButton()
						.setCustomId('report?' + photoId.imgLocal)
						.setLabel('Report')
						.setStyle('DANGER')],
					);

					if (interaction.channel instanceof TextChannel && interaction.channel.nsfw) {
						row.components[0].setCustomId('like?' + photoId.imgLocal);
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
