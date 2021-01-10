import { Optional, Model, DataTypes } from 'sequelize';
import { Link } from './link';
import database from '../database';

// when to create a link the id field will be optional
interface iLinkCreationAttributes extends Optional<Link, 'id'>{}

export interface ILinkModel extends Model<Link, iLinkCreationAttributes>, Link {}

// when creating the tables rules will be followed
const LinkModel = database.define<ILinkModel>('link', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false
  },
  hits: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});

export default LinkModel;
