import { Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // or your custom Appwrite endpoint
  .setProject("682f76610002bd2dcfde"); // replace with your project ID

const databases = new Databases(client);
const DATABASE_ID = "683035060001074993be"; // replace with your database ID
const COLLECTION_ID = "68303525002c18c7f043"; // replace with your collection ID

export { databases, DATABASE_ID, COLLECTION_ID };
