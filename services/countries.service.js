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
      return this.store(ctx)
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
		store (payload) {
			return Country
        .create(payload.params)
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
