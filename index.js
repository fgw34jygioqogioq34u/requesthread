module.exports = ({ bot, hooks }) => {
    hooks.beforeNewThread(({ user, message, cancel }) => {
        // Don't open a new thread immediately
        cancel();
    
        // Add reaction
        message.addReaction(✅);

        // Wait for reaction
        const checkForReaction = (❌) => {
        // Check for reaction
        if (❌) {
            threads.createNewThreadForUser(user, { ignoreHooks: true });
            bot.off("messageReactionAdd", checkForReaction);
        }
    };

    bot.on("messageReactionAdd", checkForReaction);
});
  };