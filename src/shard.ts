import { ShardingManager } from 'discord.js';
import api from './api';

// import dotenv from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();

export class ShardBot {
	static start(): void {

		const manager = new ShardingManager('./src/build/index.js', {
			token: process.env.token,
			totalShards: 'auto',
		});

		/* Init API */

		api(manager);

		manager.on('shardCreate', (shard) => {
			console.log(`Launched shard ${shard.id}`);
		});

		manager.spawn();
	}
}
ShardBot.start();