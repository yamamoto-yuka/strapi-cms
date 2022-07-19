'use strict';

/**
 * lost-and-found router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lost-and-found.lost-and-found');
