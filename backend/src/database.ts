import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING!, {
  logging: false,
  quoteIdentifiers: false,
  dialectOptions: {
    // ssl: {
    //   require: true,
    //   rejectUnauthorized: false
    // }
  }
});

export default sequelize;