import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();


const sequelize = new Sequelize(process.env.POSTGRES_URL!, {
  logging: false,
  quoteIdentifiers: false,
  dialectOptions: {
    // ssl: {
    //   require: process.env.SSL_DB,
    //   rejectUnauthorized: process.env.SSL_DB_REJECT
    // }
  }
});

export default sequelize;