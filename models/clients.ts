import Mongoose from 'mongoose';

interface AddressInterface {
  co: string;
  streetNr: string;
  postcode: number;
  municipality: string;
}

interface ClientsInterface {
  firstName: string;
  address: AddressInterface;
}

const address = new Mongoose.Schema(
  {
    co: { type: String, required: false },
    streetNr: { type: String, required: true },
    postcode: { type: Number, required: true },
    municipality: { type: String, required: true },
  },
  { timestamps: false, _id: false }
);

const clientsSchema = new Mongoose.Schema(
  {
    firstName: { type: String, required: true },
    address: { type: address, required: false },
  },
  {
    timestamps: true,
  }
);

export { ClientsInterface, clientsSchema };
