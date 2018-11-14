"use strict";

const User = require("../models").user;
const Country = require("../models").country;

module.exports = {
  name: "users",
  /**
   * Service settings
   */
  settings: {

  },

  /**
   * Service dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {

    /**
     * Say a 'Hello'
     *
     * @returns
     */
    index () {
      return User.findAll({
				include: [Country]
			});
    },
    create (ctx) {
      return User
        .create(ctx.params)
        .then(data => data)
        .catch(error => error);
    }
  },

  /**
   * Events
   */
  events: {

  },

  /**
   * Methods
   */
  methods: {

  },

  /**
   * Service created lifecycle event handler
   */
  created() {

  },

  /**
   * Service started lifecycle event handler
   */
  started() {

  },

  /**
   * Service stopped lifecycle event handler
   */
  stopped() {

  }
};
