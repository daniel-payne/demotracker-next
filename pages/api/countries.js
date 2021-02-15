import getCountries from 'data/getCountries'

export default async (req, res) => {
  const countries = await getCountries()

  const data = { countries }

  res.statusCode = 200
  res.json(data)
}
