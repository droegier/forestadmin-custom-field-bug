import { clientsSchema, type ClientsInterface } from './clients';

import Mongoose from 'mongoose';

const connection = Mongoose.createConnection(process.env.DATABASE_URL);

export const clients = connection.model<ClientsInterface>('clients', clientsSchema, 'clients');

export default connection;
