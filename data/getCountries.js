import pool from 'data/helpers/pool.js'

const query = `
  SELECT 
    country_id,
    country_name,
    iso2_code,
    iso3_code 
  FROM 
    info.countries
`

export default function getCountries() {
  return pool.query(query).then((res) => res.rows)
}
