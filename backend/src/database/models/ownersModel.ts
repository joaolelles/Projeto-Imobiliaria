import { INTEGER, Model } from 'sequelize';
import db from '.';
import Clients from './clientModel';
import Properties from './propertyModel';

class Owners extends Model {
  declare idOwner: number;
  declare idOwnerProperty: number;
}

Owners.init({
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
  modelName: 'owners',
  underscored: true,
});

Clients.hasMany(Properties, { foreignKey: 'idOwner', as: 'Owner' });
// Clients.hasMany(Properties, { foreignKey: 'idOwnerProperty', as: 'OwnerProperty' });

Properties.belongsTo(Owners, { foreignKey: 'idOwnerProperty', as: 'OwnerProperty' });
// Properties.belongsTo(Owners, { foreignKey: 'idOwnerProperty', as: 'OwnerProperty' });

export default Owners;