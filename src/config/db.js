import "dotenv/config";
import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL;

export default async function connectToMongoDB() {
  let mongodbClient;

  try {
    mongodbClient = new MongoClient(url);
    console.log("Conectado ao cluster do banco de dados...");
    await mongodbClient.connect();
    console.log("Conectado ao mongoDB Atlas com sucesso!");

    return mongodbClient;
  } catch (error) {
    console.error("Falha na conexão com o banco.", error);
    process.exit();
  }
}
