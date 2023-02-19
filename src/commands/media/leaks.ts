import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel, MessageActionRow, MessageButton, ButtonInteraction } from 'discord.js';
import { get } from 'request-promise-native';
import usersSchema from '../../schemas/users';
import guildsSchema from '../../schemas/guilds';

// TODO: Unfck this mess

export default {
	data: new SlashCommandBuilder()
		.setName('leaks')
		.setDescription('Get a random leaked image from our large library or Premium Leaks of various categories!')
		.addStringOption(option =>
			option.setName('category')
				.setDescription('Select a Category!')
				.setRequired(false)
				.addChoices(
					{ name: 'Asia', value: 'asia' },
					{ name: 'OnlyFans', value: 'onlyfans' },
					{ name: 'Cosplay', value: 'cosplay' },
				)),
	async execute(interaction: CommandInteraction | ButtonInteraction) {

		// Check if guild has premium enabled;
		const guildId = interaction.guildId;
		const checkIfPremium = await guildsSchema.findOne({ gid : guildId });
		const premiumFeatures = checkIfPremium.premiumFeatures;

		if (premiumFeatures == 'off') {

			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setLabel('Go to Profile')
						.setStyle('LINK')
						.setURL('https://belledelphine.gg/profile'),
					new MessageButton()
						.setLabel('Store')
						.setStyle('LINK')
						.setURL('https://store.belledelphine.gg/'),
					new MessageButton()
						.setLabel('Support Discord')
						.setStyle('LINK')
						.setURL('https://discord.gg/M55zfke4tf'),
				);

			const Embed = new MessageEmbed()
				.setTitle('Premium Command')
				.setDescription(process.env.premiumMsg)
				.setColor('#de00c4')
				.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });

			await interaction.reply({ embeds: [Embed], components: [row], ephemeral: true });

		}
		else {

			try {
				const category = interaction.isCommand() ? interaction.options.getString('category') : interaction.customId.split(':')[1];

				const row = new MessageActionRow()
					.addComponents(
						new MessageButton()
							.setCustomId('like')
							.setLabel('Like')
							.setStyle('SUCCESS')
							.setEmoji('989204410477445150'),
						new MessageButton()
							.setCustomId('leaks:' + category || '')
							.setLabel('Get more')
							.setStyle('PRIMARY'),
					// new MessageButton()
					// 	.setCustomId('report')
					// 	.setLabel('Report')
					// 	.setStyle('DANGER')
					// 	.setEmoji('972587663368540220'),
					);

				if (category && category !== 'null') {
					await interaction.reply({ content: 'Your leak is in the queue...' });
					const options = {
						url: (process.env.cdnBasePath + '/api/leaks/categories/' + category + '/'),
						method: 'GET',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
							'Authorization': process.env.cdnApiAuth,
						},
						json: true,
					};

					get(options).then(async leakId => {
						const Embed = new MessageEmbed()
							.setImage(leakId.imgUrl)
							.setDescription(':piñata: ' + leakId.category)
							.setColor('#de00c4')
							.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });
						if (interaction.channel instanceof TextChannel && interaction.channel.nsfw) {
							row.components[0].setCustomId('like?' + leakId.imgLocal);
							await interaction.editReply({ content: ' ', embeds: [Embed], components: [row] });
						}
						else {
							interaction.editReply({ content: 'This command can only be used in NSFW channels!' });
						}
					});

				}
				else {
					await interaction.reply({ content: 'Your leak is in the queue...' });
					const options = {
						url: (process.env.cdnBasePath + '/api/leaks/leaks/'),
						method: 'GET',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
							'Authorization': process.env.cdnApiAuth,
						},
						json: true,
					};
					get(options).then(async leakId => {
						const Embed = new MessageEmbed()
							.setImage(leakId.imgUrl)
							.setDescription(':piñata: Category: ' + leakId.category)
							.setColor('#de00c4')
							.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });

						if (interaction.channel instanceof TextChannel && interaction.channel.nsfw) {
							row.components[0].setCustomId('like?' + leakId.imgLocal);
							row.addComponents(new MessageButton()
								.setCustomId('report?' + leakId.imgUrl)
								.setLabel('Report')
								.setStyle('DANGER'),
							);
							await interaction.editReply({ content: ' ', embeds: [Embed], components: [row] });
						}
						else {
							interaction.editReply({ content: 'This command can only be used in NSFW channels!' });
						}
					});
				}
			}
			catch (error:any) {
				await interaction.reply({ content: 'Huh? There was a small problem on our side, please request a new image. If this error occurs more often, please write a bug report!', ephemeral: true });
			}
		}
	},
};
