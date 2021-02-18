import sql from 'data/helpers/sql.js'
import pool from 'data/helpers/pool.js'

const query = sql`
  SELECT 
    CAST ( country_id  AS TEXT)   AS "id"
  FROM 
    info.countries
`

export default async function getCountryIDs() {
  const rows = await pool.query(query).then((res) => res.rows)

  return rows
}
