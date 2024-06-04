import pg from 'pg'

const Pool = pg.Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "password", // Fix: Provide the password as a string
    database: 'simple_pos'
})

export default pool;