"use strict";

const Country = require("../models").country;
module.exports = {
  name: "countries",
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
      return this.all();
    },
    create (ctx) {
      return this.store()
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
		all () {
			return Country.findAll();
		},
		store () {
			return Country
        .create(ctx.params)
        .then(data => data)
        .catch(error => error);
		}
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
