import cache from 'data/helpers/cache.js'
import sql from 'data/helpers/sql.js'
import pool from 'data/helpers/pool.js'

const query = sql`
  SELECT 
    CAST ( country_id  AS TEXT)   AS "id",
    country_name                  AS "name",
    iso2_code                     AS "iso2Code",
    iso3_code                     AS "iso3Code", 
    outline_json                  AS "outlineJSON",
    center_json                   AS "centerJSON"
  FROM 
    info.countries
  ORDER BY
    country_name
`

export default async function getCountries() {
  const cachedRows = cache.get('COUNTRIES')

  if (cachedRows !== undefined) {
    return cachedRows
  }

  const rows = await pool
    .query(query)
    .then((res) => res.rows)
    .then(processRows)

  cache.set('COUNTRIES', rows)

  return rows
}

const processRows = (rows) => {
  return rows.map((row) => {
    const newRow = { ...row }

    if (newRow.outlineJSON) {
      newRow.outline = JSON.parse(newRow.outlineJSON)
    }

    if (newRow.centerJSON) {
      newRow.center = JSON.parse(newRow.centerJSON)
    }

    delete newRow.outlineJSON
    delete newRow.centerJSON

    return newRow
  })
}
