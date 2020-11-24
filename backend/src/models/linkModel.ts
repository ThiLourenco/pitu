import Sequelize, { Optional, Model } from 'sequelize';
import { Link } from './link';
import database from '../database';

// when to create a link the id field will be optional
interface iLinkCreationAttributes extends Optional<Link, 'id'>{}

export interface ILinkModel extends Model<Link, iLinkCreationAttributes>, Link {}

// when creating the tables rules will be followed
const LinkModel = database.define<ILinkModel>('link', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  code: {
    type: Sequelize.STRING(20),
    unique: true,
    allowNull: false
  },
  hits: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  }
});

export default LinkModel;
