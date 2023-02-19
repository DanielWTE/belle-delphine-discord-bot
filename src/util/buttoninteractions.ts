import { ButtonInteraction, Message, MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import favouriteSchema from '../schemas/favourite';
import reportSchema from '../schemas/reports';

import * as belle from '../commands/media/belle';
import * as of from '../commands/media/of';
import * as leaks from '../commands/media/leaks';

const getMoreCooldownBelle = new Set;
const getMoreCooldownOF = new Set;
const getMoreCooldownLeaks = new Set;
const cooldownMessage = "Please wait a few seconds before using this command again.";
const cooldownTime = 6000;

export default async function execute(interaction: ButtonInteraction) {
	const { id: userID, username } = interaction.user;

	switch (interaction.customId) {

	// MARK: Favourites

	case 'showFavourites': {
		try {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('favback')
						.setEmoji('⬅️')
						.setStyle('PRIMARY'),
					new MessageButton()
						.setCustomId('favnext')
						.setEmoji('➡️')
						.setStyle('PRIMARY'),
					new MessageButton()
						.setCustomId('favremove')
						.setLabel('Remove')
						.setStyle('DANGER'),
				);

			const desc = 'Welcome to your favourites!\n';

			const Embed = new MessageEmbed()
				.setTitle(username + '\'s ' + 'favourites')
				.setColor('#de00c4')
				.setDescription(desc)
				.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });

			const favourites = await favouriteSchema.find({ uid: userID });

			if (favourites.length === 0) {
			// Embed.setDescription('You have no favourites yet!\n\n');
				await interaction.reply({ content: 'You have no favourites yet!', ephemeral: true });
				break;
			}
			else {
				Embed.setImage(favourites[0].fileUrl);
				Embed.setDescription(desc + '1/' + favourites.length);
			}
			let fav = 0;
			await interaction.reply({ embeds: [Embed], components: [row], fetchReply: true }).then(async (msg) => {
				if (!(msg instanceof Message)) return;
				const collector = msg.createMessageComponentCollector({ componentType: 'BUTTON', time: 300000 });
				collector.on('collect', async (i) => {
					if (i.user.id !== userID) {
						i.deferUpdate();
						return;
					}
					switch (i.customId) {
					case 'favback':
						if (favourites.length === 0) return;
						fav--;
						if (fav < 0) fav = favourites.length - 1;
						Embed.setImage(favourites[fav].fileUrl);
						Embed.setDescription(desc + (fav + 1) + '/' + favourites.length);
						if (favourites[fav].fileUrl.endsWith('.mp4')) {
							await msg.edit({ content: favourites[fav].fileUrl, embeds: [Embed], files: [] });
						}
						else {
							await msg.edit({ embeds: [Embed], files: [] });
						}
						i.deferUpdate();
						break;
					case 'favnext':
						if (favourites.length === 0) return;
						fav++;
						if (fav >= favourites.length) fav = 0;
						Embed.setImage(favourites[fav].fileUrl);
						Embed.setDescription(desc + (fav + 1) + '/' + favourites.length);
						if (favourites[fav].fileUrl.endsWith('.mp4')) {
							await msg.edit({ content: favourites[fav].fileUrl, embeds: [Embed], files: [] });
						}
						else {
							await msg.edit({ embeds: [Embed], files: [] });
						}
						i.deferUpdate();
						break;
					case 'favremove':
						if (favourites.length === 0) return;
						await favouriteSchema.findOneAndDelete({ uid: userID, fileUrl: favourites[fav].fileUrl });
						favourites.splice(fav, 1);
						if (fav >= favourites.length) fav = 0;
						if (favourites.length === 0) {
							Embed.setImage('');
							Embed.setDescription('You have no favourites left!\n\n');
						}
						else {
							Embed.setImage(favourites[fav].fileUrl);
							Embed.setDescription(desc + (fav + 1) + '/' + favourites.length);
						}
						if (favourites.length > 0 && favourites[fav].fileUrl.endsWith('.mp4')) {
							await msg.edit({ content: favourites[fav].fileUrl, embeds: [Embed], files: [] });
						}
						else {
							await msg.edit({ embeds: [Embed], files: [] });
						}
						i.deferUpdate();
						break;
					}
				},
				);
				collector.on('end', () => {
					row.components.forEach((component) => {
						component.setDisabled(true);
					});
					msg.edit({ embeds: [Embed], components: [row] });
				});
			},
			);
			break;
		}
		catch (error: any) {
			await interaction.reply({ content: 'Huh? An important component could not be found, please try again.', ephemeral: true });
		}
		break;
	}
	default:
	{
		// MARK: Slash Belle Repeat Button

		if (interaction.customId === 'slashBelle' || interaction.customId.startsWith('themeBelle')) {
			if (getMoreCooldownBelle.has(userID)) {
				await interaction.reply({ content: cooldownMessage, ephemeral: true });
				return;
			} else {
				belle.default.execute(interaction);
				getMoreCooldownBelle.add(userID);
				setTimeout(() => {
					getMoreCooldownBelle.delete(userID);
				  }, cooldownTime);
				}
		}

		// MARK: Slash OF Repeat Button

		if (interaction.customId.startsWith('of')) {
			if (getMoreCooldownOF.has(userID)) {
				await interaction.reply({ content: cooldownMessage, ephemeral: true });
				return;
			} else {
				of.default.execute(interaction);
				getMoreCooldownOF.add(userID);
				setTimeout(() => {
					getMoreCooldownOF.delete(userID);
				  }, cooldownTime);
				}
		}

		// MARK: Slash LEAKS Repeat Button

		if (interaction.customId.startsWith('leaks')) {
			if (getMoreCooldownLeaks.has(userID)) {
				await interaction.reply({ content: cooldownMessage, ephemeral: true });
				return;
			} else {
				leaks.default.execute(interaction);
				getMoreCooldownLeaks.add(userID);
				setTimeout(() => {
					getMoreCooldownLeaks.delete(userID);
				  }, cooldownTime);
				}
		}

		// MARK: Like

		if (interaction.customId.startsWith('like')) {
			try {
				const fileUrl = process.env.cdnBasePath + interaction.customId.split('like?')[1];
				if (await favouriteSchema.findOne({ uid: userID, fileUrl: fileUrl })) {
					interaction.reply({ content: 'You\'ve already liked that media.', ephemeral: true });
				}
				else {
					await favouriteSchema.create({
						uid: userID,
						fileUrl: fileUrl,
					});
					await interaction.reply({ content: 'Saved media to your favorites.', ephemeral: true });
				}
			}
			catch (error: any) {
				await interaction.reply({ content: 'Huh? An important component could not be found, please request a new image.', ephemeral: true });
			}
		}

		if (interaction.customId.startsWith('report')) {
			try {
				const fileUrl = process.env.cdnBasePath + interaction.customId.split('report?')[1];
				await reportSchema.create({
					mediaID: fileUrl,
					message: 'Reported by ' + interaction.user.tag,
					reason: 'Discord Report Button Interaction',
				});
				await interaction.reply({ content: 'Thank you, because of you our platform is getting better and better! We will check your request as soon as possible and take action accordingly!', ephemeral: true });
			}
			catch (error: any) {
				console.error(error);
				await interaction.reply({ content: 'Huh? An important component could not be found, please request a new image.', ephemeral: true });
			}
		}

	}
	}
}