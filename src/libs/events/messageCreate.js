const logger = require("../logger");
const {User} = require('../database/models');


module.exports = async (e) => {
    logger.info(`MessageCreate interaction for user [discordSnowflake=${e.author.id}]`);

    if(e.author.bot === true) return;

    let user = await User.findOne({where: {discordSnowflake: e.author.id}});
    if(!user){
        user = await new User({discordSnowflake: e.author.id}).save();
    }
};