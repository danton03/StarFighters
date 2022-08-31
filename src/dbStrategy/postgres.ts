import { Pool } from 'pg';
import dotenv from "dotenv";

dotenv.config();

const USER = process.env.DATABASE_USER;
const HOST = process.env.DATABASE_HOST;
const DATABASE = process.env.DATABASE;
const PASSWORD = process.env.PASSWORD;
const PORT = Number(process.env.DATABASE_PORT);

const connection = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: PORT
})


export default connection;