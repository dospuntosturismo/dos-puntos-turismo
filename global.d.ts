import { MongoClient } from 'mongodb';

declare global {
  let _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Para evitar errores si se usa ESModules y no CommonJS
export {};
