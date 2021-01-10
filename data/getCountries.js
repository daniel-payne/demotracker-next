import pool from 'data/helpers/pool.js'

const sql = `SELECT country_id,country_name,iso2_code,iso3_code FROM info.countries c LIMIT 10;`

export default function getCountries() {
  return pool.query(sql).then((res) => res.rows)
}
