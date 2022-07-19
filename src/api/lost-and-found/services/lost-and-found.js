'use strict';

/**
 * lost-and-found service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lost-and-found.lost-and-found');
