import pg from 'pg'

const pool = new pg.Pool({
  // user:     process.env.PGUSER,
  // host:     process.env.PGHOST,
  // database: process.env.PGDATABASE,
  // port:     process.env.PGPORT,
  // password: process.env.PGPASSWORD,
})

export default pool
