import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed, CommandInteraction, TextChannel } from 'discord.js';
import { get } from 'request-promise-native';

// TODO: Unfck this mess

const nekos = [
	'(✿◠‿◠)',
	'≧◡≦',
	'(▰˘◡˘▰)',
	'(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
	'(●´ω｀●)',
	'(づ｡◕‿‿◕｡)づ',
	'╰(◡‿◡✿╰)',
	'(◕ω◕✿)',
	'⊂◉‿◉つ',
	'◕‿◕',
];

export default {
	data: new SlashCommandBuilder()
		.setName('neko')
		.setDescription('Get a cute neko picture!'),
	async execute(interaction: CommandInteraction) {
		const num = Math.floor(Math.random() * nekos.length);
		const title = nekos[num].toString();

		const option = {
			url: ('https://nekos.life/api/v2/img/neko'),
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			json: true,
		};

		get(option).then(async neko => {
			// console.log(neko.url);
			const Embed = new MessageEmbed()
				.setTitle(title)
				.setImage(neko.url)
				.setColor('#de00c4')
				.setFooter({ text: 'belledelphine.gg | The Belle Delphine Discord Bot'});
			if (interaction.channel instanceof TextChannel && interaction.channel.nsfw) {
				await interaction.reply({ content: 'Your photo is in the queue...', ephemeral: true });
				interaction.followUp({ embeds: [Embed] });
			}
			else {
				interaction.reply({ content: 'This command can only be used in NSFW channels!', ephemeral: true });
			}
		});
	},
};