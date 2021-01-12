import sql from 'data/helpers/sql.js'
import pool from 'data/helpers/pool.js'

const query = sql`
  SELECT 
    CAST ( state_id    AS TEXT)      AS "id",
    state_name                       AS "name",
    CAST ( country_id  AS TEXT)      AS "countryId",
    country_name                     AS "countryName",
    hasc_code                        AS "hascCode",
    outline_json                     AS "outline",
    center_json                      AS "center"
  FROM 
    info.states
  WHERE
    country_id = :ID
`

export default async function getCountry(id) {
  const completedQuery = query.replace(':ID', id)

  const rows = await pool
    .query(completedQuery)
    .then((res) => res.rows)
    .then(processRows)

  console.log('getStates : ' + rows.length)

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
