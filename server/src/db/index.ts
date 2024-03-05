import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

dotenv.config();

export const pool = new Pool({
    user: process.env.DB_USER,
    database: 'declinium',
    password: process.env.DB_PASSWORD,
    port: 5432,
});


export function dbConnect() {
    return pool.connect();
}
