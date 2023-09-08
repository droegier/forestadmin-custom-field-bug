import type { Schema } from '../typings';
import { CollectionCustomizer } from '@forestadmin/datasource-customizer';

export const customizeClientsAddress = (collection: CollectionCustomizer<Schema, 'clients_address'>) => {
  collection.addField('fullAddress', {
    columnType: 'String',
    dependencies: [ 'streetNr', 'postcode', 'municipality', 'co' ],
    getValues: (records) => {
      return records.map((r) => `${r.streetNr}, ${r.postcode} ${r.municipality} ${r.co ? `(${r.co})` : ''}`);
    },
  });
};
