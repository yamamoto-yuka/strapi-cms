module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST','134.122.33.23'),
      port: env.int('DATABASE_PORT',3306),
      database: env('DATABASE_NAME','myadmin'),
      user: env('DATABASE_USERNAME','strapi'),
      password: env('DATABASE_PASSWORD', 'MySQL@dmin!12345'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});