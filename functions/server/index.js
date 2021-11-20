require = require("esm")(module /* , options*/);

const { Server } = require("./main");

const handler = Server.createHandler()

module.exports = { handler }
