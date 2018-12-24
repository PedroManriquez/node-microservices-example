'use strict';

const User = require('../models').user;
const Country = require('../models').country;

module.exports = {
  name: 'users',
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
      return this.verifyPasswords(ctx.params)
        ? User
          .register(ctx.params)
          .then(data => data)
          .catch(error => error)
        : { msg: 'password should be equal!' }
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
    verifyPasswords (payload) {
      return payload.password === payload.password_confimation
    }
  },

  /**
   * Service created lifecycle event handler
   */
  created () {

  },

  /**
   * Service started lifecycle event handler
   */
  started () {

  },

  /**
   * Service stopped lifecycle event handler
   */
  stopped () {

  }
};
