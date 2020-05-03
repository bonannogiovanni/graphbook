module.exports = {
  development: {
    username: "devuser",
    password: "DevUser2020!",
    database: "graphbook_dev",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    username: "admin",
    password: "DevUser2020!",
    database: "graphbook_dev",
    host: "graphbook.cdylycusf6vq.eu-central-1.rds.amazonaws.com",
    logging: false,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
