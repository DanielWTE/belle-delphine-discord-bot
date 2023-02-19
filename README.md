<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<br />
<div align="center">

<h3 align="center">Belle Delphine Discord Bot</h3>

  <p align="center">
    The official Discord Bot from <a href="https://belledelphine.gg/"><strong>belledelphine.gg</strong></a> this bot is made for the community and is not affiliated with Belle Delphine.
    <br />
    We started this project in April 2022 and finally decided to make the source code of our bot public so that other developers or users can improve it or host their own Belle Delphine Discord bot for their own Discord servers.
    <br />
    <a href="https://belledelphine.gg/"><strong>Explore the project website »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/DanielWTE/belle-delphine-discord-bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/DanielWTE/belle-delphine-discord-bot/issues">Request Feature</a>
  </p>
</div>


### Built With

* [![NPM][NPM]][NPM-url]
* [![Typescript][Typescript]][Typescript-url]
* [![Discordjs][Discordjs]][Discordjs-url]
* [![Axios][Axios]][Axios-url]
* [![OFHub][ofhub]][ofhub-url]

API from [[!OFHub][ofhub]] contact [!OFHub][mail] for a API key.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features 🎀

* **Image Commands** - Get random images from Belle Delphine and other content creators from OFHub.
* **Video Commands** - Get a random video, and stream it directly on our website.
* **Fun Commands** - Get blamed by Belle Delphine, or some other funny things.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started 🎉

First of all, you need to clone the project.
Go to your folder where you want to clone the project and run the following command:

```sh
git clone https://github.com/DanielWTE/belle-delphine-discord-bot.git
```

Open the .env file and fill in the required values shown below

```txt
token=<Your Bot Token>
// MongoDB Connection String and API
mongoPath=mongodb://<username>:<password>@<host>:<port>/<database>
cdnApiAuth=<Your API Key from ofhub.fun / api@ofhub.fun>
```

If you don't have a MongoDB database, you can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to create a free database in the cloud.

### Prerequisites 📋

Now you need to install all the dependencies. To do this, you need to run the following commands in the root folder of the project:

```sh
npm install
```

Use the following command to compile the typescript files to javascript files:

```sh
tsc
```

### Takeoff 🚀

Now you can start the bot with the following command:

```sh
npm start
```

The bot will automatically create the collections in the database if they do not exist, and will start up.

If you want to use the bot 24/7, you can use a service like [PM2](https://pm2.keymetrics.io/).

Here is an example:
    ```sh
    pm2 start ./src/build/shard.js --name "My Belle Delphine Bot" --watch
    ```

## Usage ✨

1. Just invite your bot to your server.
2. Use '/help' to get a list of all commands.
3. Have fun! 🎉


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License 🧾

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/DanielWTE/belle-delphine-discord-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/DanielWTE/belle-delphine-discord-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/DanielWTE/belle-delphine-discord-bot.svg?style=for-the-badge
[forks-url]: https://github.com/DanielWTE/belle-delphine-discord-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/DanielWTE/belle-delphine-discord-bot.svg?style=for-the-badge
[stars-url]: https://github.com/DanielWTE/belle-delphine-discord-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/DanielWTE/belle-delphine-discord-bot.svg?style=for-the-badge
[issues-url]: https://github.com/DanielWTE/belle-delphine-discord-bot/issues
[license-shield]: https://img.shields.io/github/license/DanielWTE/belle-delphine-discord-bot.svg?style=for-the-badge
[license-url]: https://github.com/DanielWTE/belle-delphine-discord-bot/blob/main/LICENSE

[NPM]: https://img.shields.io/badge/npm-000000?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com/
[Typescript]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Discordjs]: https://img.shields.io/badge/discord.js-000000?style=for-the-badge&logo=discord&logoColor=white
[Discordjs-url]: https://discord.js.org/
[Axios]: https://img.shields.io/badge/axios-000000?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/

[ofhub]: https://img.shields.io/badge/ofhub-000000?style=for-the-badge&logo=onlyfans&logoColor=white
[ofhub-url]: https://ofhub.fun/
[mail]: mailto:api@ofhub.fun