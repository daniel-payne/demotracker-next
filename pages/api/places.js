import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    res.statusCode = 200
    res.json(data)
  } else {
    res.status = 403
    res.json({
      message: 'You must be sign in to view your saved locations.',
    })
  }
}

const data = {
  world: {
    incidentCount: 12,
  },
  countries: [
    {
      id: 80,
      name: 'United Kingdom',
      residentCount: 3,
      facilitiesCount: 1,
      travelerCount: 12,
      bookingCount: 46,
      incidentCount: 3,
    },
    { id: 9, name: 'India', travelerCount: 2, incidentCount: 1 },
    { id: 32, name: 'Congo', travelerCount: 14, incidentCount: 2 },
    { id: 36, name: 'France', residentCount: 1, incidentCount: 1 },
    { id: 23, name: 'Germany', residentCount: 4, travelerCount: 18 },
    { id: 76, name: 'Norway', residentCount: 1 },
    { id: 33, name: 'Denmark', facilitiesCount: 1, residentCount: 36 },
    { id: 33, name: 'Italy' },
  ],
  states: [
    { id: 456456, name: 'Hyderabad', travelerCount: 3, incidentCount: 1, country: { id: 9, name: 'India' } },
    { id: 234234, name: 'Essex', residentCount: 1, country: { id: 80, name: 'United Kingdom' } },
  ],
  cities: [{ name: 'Berlin', countryName: 'Germany' }],
}
