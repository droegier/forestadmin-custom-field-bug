import type { Schema } from '../typings';
import { Agent } from '@forestadmin/agent';

import { flattenOptions as clientsFlattenOptions } from './clients';
import { customizeClientsAddress } from './clients-address';

export const customizeCollections = (agent: Agent<Schema>) => {
  agent.customizeCollection('clients_address', (collection) => customizeClientsAddress(collection));
};

export const flattenOptions = {
    clients: clientsFlattenOptions,
  };
  
