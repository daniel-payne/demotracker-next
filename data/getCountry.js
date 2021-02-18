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
  WHERE
  country_id = :ID
`

export default async function getCountry(id) {
  const completedQuery = query.replace(':ID', id)

  const rows = await pool
    .query(completedQuery)
    .then((res) => res.rows)
    .then(processRows)

  return rows[0]
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
