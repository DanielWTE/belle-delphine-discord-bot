import { SlashCommandBuilder } from "@discordjs/builders";
import {
  MessageEmbed,
  CommandInteraction,
  TextChannel,
  ButtonInteraction,
} from "discord.js";
import { get } from "request-promise-native";

export default {
  data: new SlashCommandBuilder()
    .setName("video")
    .setDescription("Get a random video from our gallery! #Part 1")
    .addStringOption((option) =>
      option
        .setName("actor")
        .setDescription("Select a optional actor!")
        .setRequired(false)
        .addChoices(
          { name: 'AbnRmalxo', value: 'ABNRMALXO' },
          { name: 'Aiwa Only', value: 'AIWA ONLY' },
          { name: 'Alea Vi', value: 'ALEA VI' },
          { name: 'Aleebabe', value: 'ALEEBABE' },
          { name: 'Alexandra Mora', value: 'ALEXANDRA MORA' },
          { name: 'Alice Swe', value: 'ALICE SWE' },
          { name: 'Alinarose', value: 'ALINAROSE' },
          { name: 'Ally Sk', value: 'ALLY SK' },
          { name: 'Alyri', value: 'ALYRI' },
          { name: 'Amber Madison', value: 'AMBER MADISON' },
          { name: 'Ambermarieexoxo', value: 'AMBERMARIEEXOXO' },
          { name: 'Amirabrie', value: 'AMIRABRIE' },
          { name: 'Amyyyy', value: 'AMYYYY' },
          { name: 'Anastasiajadore', value: 'ANASTASIAJADORE' },
          { name: 'AngLcqke', value: 'ANGLCQKE' },
          { name: 'Angela Halee', value: 'ANGELA HALEE' },
          { name: 'Arabell', value: 'ARABELL' },
          { name: 'Ariana Diamond', value: 'ARIANA DIAMOND' },
          { name: 'Arianamumtaz', value: 'ARIANAMUMTAZ' },
          { name: 'Arilaviee', value: 'ARILAVIEE' },
          { name: 'Arturmary', value: 'ARTURMARY' },
          { name: 'Asianmochi', value: 'ASIANMOCHI' },
          { name: 'Aspenirl', value: 'ASPENIRL' },
          { name: "I want more!", value: "donate" }
        )
    ),
    async execute(interaction: CommandInteraction | ButtonInteraction) {
    try {

      const actor = interaction.isCommand() ? interaction.options.getString('actor') : interaction.customId.split(':')[1];

      if (actor === "donate") {
        await interaction.reply({
          content:
            "If you want more, sign up for a subscription - and get access to many more features! \n\n https://store.belledelphine.gg/",
          ephemeral: true,
        });
      } else if (actor) {
        // If you want to send the video in a private, use this code: //
        // await interaction.reply({ content: 'Your video is in the queue...', ephemeral: true });
        await interaction.reply({ content: "Your video is in the queue..." });
        const options = {
          url: process.env.cdnBasePath + "/api/videos/videos/",
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: process.env.cdnApiAuth,
            "Requests": "1",
            "Actor": actor,
          },
          json: true,
        };
        get(options).then(async (videoId) => {
            const Embed = await new MessageEmbed()
              .setImage(videoId[0].videoThumbnail)
              .setTitle(
                "Hey, here's the link to the video: " + "https://belledelphine.gg/watch?v=" + videoId[0].videoUrlID
              )
              .setDescription(
                "The link will take you to our platform, where you will - \n find a wide range of hot videos!" +
                  "\n\n" +
                  ":person_tipping_hand: Actor: " +
                  videoId[0].actor +
                  "\n" +
                  ":alarm_clock: Duration: " +
                  videoId[0].duration +
                  "\n" +
                  ":eyes: Views: " +
                  videoId[0].views +
                  "\n\n" +
                  ":camera_with_flash: Thumbnail:"
              )
              .setColor("#de00c4")
              .setFooter({
                text: "belledelphine.gg | The Belle Delphine Discord Bot",
              });
            if (
              interaction.channel instanceof TextChannel &&
              interaction.channel.nsfw
            ) {
              // await interaction.reply({ content: 'Your video is in the queue...', ephemeral: true });
              await interaction.editReply({
                content: " ",
                embeds: [Embed],
              });
            } else {
              interaction.editReply({
                content: "This command can only be used in NSFW channels!",
              });
            }
        });
      } else {
        // If you want to send the video in a private, use this code: //
        // await interaction.reply({ content: 'Your video is in the queue...', ephemeral: true });
        await interaction.reply({ content: "Your video is in the queue..." });
        const options = {
          url: process.env.cdnBasePath + "/api/videos/videos/",
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Requests": "1",
            Authorization: process.env.cdnApiAuth,
          },
          json: true,
        };
        get(options).then(async (videoId) => {
            const Embed = new MessageEmbed()
              .setImage(videoId[0].videoThumbnail)
              .setTitle(
                "Hey, here's the link to the video: " + "https://belledelphine.gg/watch?v=" + videoId[0].videoUrlID
              )
              .setDescription(
                "The link will take you to our platform, where you will - \n find a wide range of hot videos!" +
                  "\n\n" +
                  ":person_tipping_hand: Actor: " +
                  videoId[0].actor +
                  "\n" +
                  ":alarm_clock: Duration: " +
                  videoId[0].duration +
                  "\n" +
                  ":eyes: Views: " +
                  videoId[0].views +
                  "\n\n" +
                  ":camera_with_flash: Thumbnail:"
              )
              .setColor("#de00c4")
              .setFooter({
                text: "belledelphine.gg | The Belle Delphine Discord Bot",
              });
            if (
              interaction.channel instanceof TextChannel &&
              interaction.channel.nsfw
            ) {
              await interaction.editReply({
                content: " ",
                embeds: [Embed],
              });
            } else {
              interaction.editReply({
                content: "This command can only be used in NSFW channels!",
              });
            }
        });
      }
    } catch (error: any) {
      await interaction.followUp({
        content:
          "Huh? There was a small problem on our side, please request a new video. If this error occurs more often, please write a bug report!",
        ephemeral: true,
      });
    }
  },
};
