// import express from 'express';
import { ShardingManager } from 'discord.js';
import express = require('express');
import { BelleClient } from '.';

export default (manager: ShardingManager) => {
	const app = express();
	const port = process.env.PORT;

		app.listen(port, () => {
			console.log(`[server]: API is running at http://localhost:${port}`);
		});

	// Welcome Screen
	app.get('/', (_, res) => {
		res.send('Belle Delphine API');
	});

	// Guild Count
	app.get('/guilds/count', (_, res) => {
		manager.fetchClientValues('guilds.cache.size').then(results => {
			res.send([results.reduce((prev: number, guildCount: number) => prev + guildCount, 0)]);
		});
	});

	// Guild Names
	app.get('/guilds/names', (_, res) => {
		manager.fetchClientValues('guilds.cache').then(results => {
			const guilds = results.reduce((prev: any, guilds: any) => prev.concat(guilds.map(g => g.name)), []);
			res.send(guilds);
		});
	});

	// Guild Members
	app.get('/guilds/member', (_, res) => {

		manager.fetchClientValues('guilds.cache').then(results => {
			const guilds = results.reduce((prev: any, guilds: any) => prev.concat(guilds.map(g => g.memberCount)), []);
			res.send(guilds);
		});
	});

	// All Users using the bot
	app.get('/users', (_, res) => {
	manager.fetchClientValues('guilds.cache')
		.then((results: any) => {
			const guilds = results.reduce((prev: any, guild: any) => prev.concat(guild), []);
			const members = guilds.map((g: any) => g.memberCount);
			res.send([members.reduce((prev: any, memberCount: any) => prev + memberCount, 0)]);
		});
	});

	// Shards
	/*
	client.shard.broadcastEval(client => [client.shard.ids, client.ws.status, client.ws.ping, client.guilds.cache.size])
	.then((results) =>{
		app.get('/shards', (_, res) => {
			results.map((data) => {
				res.send([data[0], data[1], data[2], data[3], data[4]]);
			});
		});
	});
	*/
};