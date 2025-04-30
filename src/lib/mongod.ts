import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const options = {};

// let client;
// let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Por favor define la variable MONGODB_URI en tu archivo .env.local");
}

// if (process.env.NODE_ENV === 'development') {
//   if (!globalThis._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     globalThis._mongoClientPromise = client.connect();
//   }
//   clientPromise = globalThis._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

const client = new MongoClient(uri, options);
 const clientPromise: Promise<MongoClient> = client.connect();

export default clientPromise;