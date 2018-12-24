"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],
	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,
    cors: { // Global CORS settings for all routes
      origin: "*",
      methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
      allowedHeaders: [],
      exposedHeaders: [],
      credentials: false
    },
		routes: [{
			path: "/api",
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			],
			aliases: {
				"GET countries": "countries.index",
				"POST countries": "countries.create",
				"GET users": "users.index",
				"POST users": "users.create",
				"POST login": "logins.authenticate"
			}
		}],

		// Serve assets from "public" folder
		/* assets: {
			folder: "public"
		} */
	}
};
