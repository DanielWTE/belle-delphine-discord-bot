const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');
const { Modal, TextInputComponent, showModal } = require('discord-modals');

// TODO: Unfck this mess

export const cooldownBug = new Set;

export default {
	data: new SlashCommandBuilder()
		.setName('bug')
		.setDescription('Report a bug!'),
	async execute(interaction: typeof CommandInteraction) {

		const executor = interaction.user.id;

		if (cooldownBug.has(executor)) {
			interaction.reply({ content: 'Unfortunately, we cannot receive your bug report yet because you have already submitted one recently. Please try again in a few minutes.', ephemeral: true });
		}
		else {

			const modal = new Modal()
				.setCustomId('bug-report-modal')
				.setTitle('Report a bug to the Developers!')
				.addComponents(
					new TextInputComponent()
						.setCustomId('bug-report')
						.setLabel('Bug Description')
						.setStyle('LONG')
						.setMinLength(30)
						.setPlaceholder('Please describe the bug as detailed as possible.\n\nPlease add pictures, you can use imgur.com')
						.setRequired(true),
				);
			showModal(modal, { client: interaction.client, interaction: interaction });
		}
	},
};