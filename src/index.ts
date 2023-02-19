/* eslint-disable no-console */
// import fs from 'fs';
import fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
// const {Discord, Client, Collection, GuildMember, Intents} require("discord.js");
import { Client, Collection, GuildMember, Intents, MessageActionRow, MessageButton, MessageEmbed, TextChannel } from 'discord.js';
const mongoose = require('mongoose');
// import discordModals from 'discord-modals';
const discordModals = require('discord-modals');
import { cooldownBug } from './commands/utility/bug';
import { cooldownSuggest } from './commands/utility/suggest';
import bugSchema from './schemas/bug';
import suggestSchema from './schemas/suggest';
import analyticsSchema from './schemas/analytics';
import buttonInteraction from './util/buttoninteractions';
import usersSchema from './schemas/users';
import guildsSchema from './schemas/guilds';
import inventorySchema from './schemas/inventory';


// TODO: Unfck this mess

/** * * * * * * * * * * * * * * * * * * * * **/
// import dotenv from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();
/** * * * * * * * * * * * * * * * * * * * * **/

export class BelleClient extends Client {
	commands: Record<string, any> = new Collection();
}

// Intents
const client = new BelleClient({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES],
	partials: ['CHANNEL'],
});

// MongoDB Connect
mongoose.connect(process.env.mongoPath || '');

// Discord Modals
discordModals(client);

const commands: {}[] = [];
client.commands = new Collection();

// ** TypeScript Version ** //

// (async function loadCommands(dir) {
// 	for (const file of fs.readdirSync(`./src/${dir}`)) {
// 		if (file.endsWith('.ts')) {
// 			// eslint-disable-next-line global-require
// 			const command = require(`./${dir}/${file}`);
// 			// set a new item in the Collection
// 			// with the key as the command name and the value as the exported module
// 			client.commands.set(command.default.data.name, command);
// 			commands.push(command.default.data.toJSON());
// 		}
// 		else {
// 			fs.stat(`./src/${dir}/${file}`, (err, stats) => {
// 				if (err) return console.log(err);
// 				if (stats.isDirectory()) {
// 					loadCommands(`${dir}/${file}`);
// 				}
// 			});
// 		}
// 	}
// })('commands');

// ** Javascript Version (for Sharding) ** //

(async function loadCommands(dir) {
	for (const file of fs.readdirSync(`./src/build/${dir}`)) {
		if (file.endsWith('.js')) {
			// eslint-disable-next-line global-require
			const command = require(`./${dir}/${file}`);
			// set a new item in the Collection
			// with the key as the command name and the value as the exported module
			client.commands.set(command.default.data.name, command);
			commands.push(command.default.data.toJSON());
		}
		else {
			fs.stat(`./src/build/${dir}/${file}`, (err, stats) => {
				if (err) return console.log(err);
				if (stats.isDirectory()) {
					loadCommands(`${dir}/${file}`);
				}
			});
		}
	}
})('commands');


const rest = new REST({ version: '9' }).setToken(process.env.token!);

/**
 * Set up client, commands.
 */

client.on('ready', async () => {

	if (!client.user) return;

	client.user.setActivity('belledelphine.gg', { type: 'PLAYING' });

	if (client.guilds.cache.get(process.env.serverId || '')) {
		try {
			console.log('Slash Commands (/) werden auf den Testserver geladen ...');

			await rest.put(
				Routes.applicationGuildCommands(client.user.id, process.env.serverId!),
				{ body: commands },
			);
			console.log('Erfolgreich alle Slash Commands (/) aktualisiert.');
		}
		catch (error) {
			console.error(error);
		}
	}
	else {
		try {
			console.log('Slash Commands (/) werden global geladen ...');
			console.log('Server Count: ' + client.guilds.cache.size);
			await rest.put(
				Routes.applicationCommands(client.user.id),
				{ body: commands },
			);
			console.log('Erfolgreich alle Slash Commands (/) aktualisiert.');
		}
		catch (error) {
			console.error(error);
		}
	}
});


// Send Message when Bot joins a new server //

client.on('guildCreate', async (g) => {

	//Save Guilds to Database on invite
	const checkIfGuildExists = await guildsSchema.findOne({ gid : g.id });
		if (!checkIfGuildExists) {
			await guildsSchema.create({
				gid: g.id,
			});
		}

	// Invite "Thanks" message
	
    const channel = g.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(g.me).has('SEND_MESSAGES'))

		const Embed = new MessageEmbed()
			.setTitle(':wave: ** Thanks for adding me to your server! **')
			.setColor('#de00c4')
			.setDescription('For more information on how to use this bot, use the /help command. For more help you can join our support server: https://discord.gg/uxfRtwAJfn. \n\n **Quick Start:**')
			.addFields(
				{ name: '\u200B', value: '\u200B' },
				{ name: '/belle', value: 'Get a random Belle picture, or choose one from different themes.', inline: true },
				{ name: '/of', value: 'Get a random OnlyFans picture, or choose from different performers.', inline: true },
				{ name: '/video', value: 'Get a video that you can watch on our platform.', inline: true },
				{ name: '\u200B', value: '\u200B' },
			)
			.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot' });
		(channel as TextChannel).send({ embeds: [Embed] });
})

// Commands //

client.on('interactionCreate', async interaction => {

	/**
	 * Handle interaction commands.
	 */

	if (interaction.isCommand()) {

		//Save Guilds to Database
		const checkIfGuildExists = await guildsSchema.findOne({ gid : interaction.guild.id });
		if (!checkIfGuildExists) {
			await guildsSchema.create({
				gid: interaction.guild.id,
			});
		}

		// Get Command Executor uid
		const userID = interaction.user.id;

		// ** Save Discord User to Database and creat Inventory ** //

		const checkIfUserExists = await usersSchema.findOne({ uid : userID });

		if (!checkIfUserExists) {
			await usersSchema.create({
				uid: userID,
				balance: 0,
			});
			await inventorySchema.create({
				uid: userID,
			});

		}

		// ** Own Command Tracking (Database) ** //
		// console.log(interaction);
		const guildID = interaction.guild.id;
		const command = interaction['commandName'].toLowerCase();
		const uLocale = interaction['locale'].toLowerCase();
		const gLocale = interaction['guildLocale'].toLowerCase();

		await analyticsSchema.create({
			uid: userID,
			gid: guildID,
			command: command,
			uLocale: uLocale,
			gLocale: gLocale,
		});

		const { commandName } = interaction;

		if (!client.commands.has(commandName)) return;

		if (!(interaction.member instanceof GuildMember)) return;

		// Add PremiumMessage
		if (client.commands.get(commandName).default.premium) {
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

				return;
			}
		}


		try {
			await client.commands.get(commandName).default.execute(interaction, client);
		}
		catch (error: any) {
			console.error(error);
			await interaction.reply({ content: 'Huh? There was an error, please try again!', ephemeral: true });
		}
	}
	else if (interaction.isButton()) {
		buttonInteraction(interaction);
	}
});

// Get bug report modal and reply
client.on('modalSubmit', async (modal) => {
	const executor = modal.user.id;
	switch (modal.customId) {
	case 'bug-report-modal': {
		const description = modal.getTextInputValue('bug-report');
		await modal.deferReply({ ephemeral: true });
		modal.followUp({ content: `Thank you! We will have a look at the bug soon! \n\n **Your report:** \n\`\`\`${description}\`\`\``, ephemeral: true });
		cooldownBug.add(executor);
		setTimeout(() => {
			cooldownBug.delete(executor);
		}, 180000);

		const bugID = await bugSchema.count() + 1;

		await bugSchema.create({
			_id: bugID,
			uid: executor,
			description: description,
		});
		break;
	}
	case 'suggest-modal': {
		const description = modal.getTextInputValue('suggestion');
		await modal.deferReply({ ephemeral: true });
		modal.followUp({ content: `Thank you! We will have a look at your nice idea soon! \n\n **Your suggestion:** \n\`\`\`${description}\`\`\``, ephemeral: true });
		cooldownSuggest.add(executor);
		setTimeout(() => {
			cooldownSuggest.delete(executor);
		}, 180000);

		const suggestID = await suggestSchema.count() + 1;

		await suggestSchema.create({
			_id: suggestID,
			uid: executor,
			description: description,
		});
		break;
	}
	}
});
// Recognize Discord API Errors //

client.on('unhandledRejection', async error => {
	if (error.code == 10062) {
		await error.reply({ content: 'Huh? There was an error, please try again!', ephemeral: true });
	}
	if (error.httpStatus == 404) {
		await error.reply({ content: 'Huh? There was an error, please try again!', ephemeral: true });
	}
});

client.login(process.env.token);
