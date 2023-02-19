const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');
const { Modal, TextInputComponent, showModal } = require('discord-modals');

// TODO: Unfck this mess

export const cooldownSuggest = new Set;

export default {
	data: new SlashCommandBuilder()
		.setName('suggest')
		.setDescription('Suggest a feature!'),
	async execute(interaction: typeof CommandInteraction) {

		const executor = interaction.user.id;

		if (cooldownSuggest.has(executor)) {
			interaction.reply({ content: 'Unfortunately, we cannot receive your suggestion yet because you have already submitted one recently. Please try again in a few minutes.', ephemeral: true });
		}
		else {

			const modal = new Modal()
				.setCustomId('suggest-modal')
				.setTitle('Suggest a feature to the Developers!')
				.addComponents(
					new TextInputComponent()
						.setCustomId('suggestion')
						.setLabel('Tell us your idea!')
						.setStyle('LONG')
						.setMinLength(30)
						.setPlaceholder('Please tell us your wonderful ideas')
						.setRequired(true),
				);
			showModal(modal, { client: interaction.client, interaction: interaction });
		}
	},
};