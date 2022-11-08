const dotenv = require('dotenv');

dotenv.config({ path: `${process.cwd()}/.${process.env.NODE_ENV.replace(' ', '')}.env`});

module.exports = {
  discordToken: process.env.DISCORD_TOKEN,
  discordClientId: process.env.CLIENT_ID,
  shouldCreateCommands: process.env.SHOULD_CREATE_COMMANDS === 'true',
  dbHost: process.env.DB_HOST,
  postgresUser: process.env.POSTGRES_USER,
  postgresDb: process.env.POSTGRES_DB,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  forceDbReset: process.env.FORCE_DB_RESET === 'true'
};
