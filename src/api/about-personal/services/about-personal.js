'use strict';

/**
 * about-personal service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-personal.about-personal');
