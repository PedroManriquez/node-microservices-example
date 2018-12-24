'use strict';
const bcrypt = require('bcrypt');
const login = require('../models').login;
const { MoleculerClientError } = require('moleculer').Errors;

module.exports = {
  name: 'logins',
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
    authenticate (ctx) {
      return login
        .findOne({
          where: { username: ctx.params.username }
        })
        .then(user => {
          return bcrypt.compare(ctx.params.password, user.password_confimation)
            .then(res => res || new MoleculerClientError('Wrong password!', 422, '', [{ field: 'email', message: 'is not found' }]))
          .catch(err => err)
        })
        .catch(err => err)
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
