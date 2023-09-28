import { INTEGER, Model } from 'sequelize';
import db from '.';
import Client from './clientModel';
import Property from './propertyModel';

class Owner extends Model {
  declare idOwner: number;
  declare idOwnerProperty: number;
}

Owner.init({
    idOwner: {
        allowNull: false,
        type: INTEGER,
        references: {
          model: 'clients',
          key: 'id_client',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      idOwnerProperty: {
        allowNull: false,
        type: INTEGER,
        references: {
          model: 'properties',
          key: 'id_property',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'owner',
  underscored: true,
});

Client.hasMany(Owner, { foreignKey: 'idOwner', as: 'Owner' });
Owner.belongsTo(Client, { foreignKey: 'idOwner', as: 'Owner' });
Property.hasOne(Owner, { foreignKey: 'idOwnerProperty', as: 'OwnerProperty' });
Owner.belongsTo(Property, { foreignKey: 'idOwnerProperty', as: 'OwnerProperty' });


export default Owner;