import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Client extends Model {
  declare idClient: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

Client.init({
    idClient: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      username: {
        allowNull: false,
        type: STRING,
      },
      role: {
        allowNull: false,
        type: STRING,
      },
      email: {
        allowNull: false,
        type: STRING,
      },
      password: {
        allowNull: false,
        type: STRING,
      },
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'client',
  underscored: true,
});

export default Client;