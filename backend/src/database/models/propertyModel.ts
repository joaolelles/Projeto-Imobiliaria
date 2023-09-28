import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Property extends Model {
  declare idProperty: number;
  declare address: string;
  declare complement: string;
  declare city: string;
  declare state: string;
  declare availability: string;
  declare price: number;
}

Property.init({
    idProperty: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      address: {
        allowNull: false,
        type: STRING,
      },
      complement: {
        allowNull: true,
        type: STRING,
      },
      city: {
        allowNull: false,
        type: STRING,
      },
      state: {
        allowNull: false,
        type: STRING,
      },
      availability: {
        allowNull: false,
        type: STRING,
      },
      price: {
        allowNull: false,
        type: INTEGER,
      },
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'property',
  underscored: true,
});

export default Property;