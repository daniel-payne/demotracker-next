import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    res.statusCode = 200
    res.json(data)
  } else {
    res.status = 403
    res.json({
      message: 'You must be sign in to view people in your organization.',
    })
  }
}

const data = {
  people: [
    {
      id: 123,
      name: 'David Smith',
      homeLocation: {
        countryName: '',
        stateName: '',
        cityName: '',
        countryId: 44,
        stateId: 44,
        cityId: 44,
      },
    },
    {
      id: 456,
      name: 'Bill Brown',
      travelLocation: {
        countryName: '',
        stateName: '',
        cityName: '',
        countryId: 44,
        stateId: 44,
        cityId: 44,
        arrivalDate: '',
        departureDate: '',
      },
    },
    {
      id: 789,
      name: 'June Whitsun',
      homeLocation: {
        countryName: '',
        stateName: '',
        cityName: '',
        countryId: 44,
        stateId: 44,
        cityId: 44,
      },
    },
  ],
}

const travel = {
  inbound: {
    departure: {
      locationId: '',
      locationName: '',
      locationCode: '',
      countryId: '',
      stateId: 44,
      cityId: 44,
      departureDate: '',
    },
    arrival: {
      locationId: '',
      locationName: '',
      locationCode: '',
      countryId: '',
      stateId: 44,
      cityId: 44,
      arrivalDate: '',
    },
  },
  accommodation: [
    {
      description: '',
      locationId: '',
      locationName: '',
      locationCode: '',
      countryId: '',
      stateId: 44,
      cityId: 44,
      arrivalDate: '',
      departureDate: '',
      contactDetails: '',
    },
  ],
  outbound: {
    departure: {
      locationId: '',
      locationName: '',
      locationCode: '',
      countryId: '',
      stateId: 44,
      cityId: 44,
      departureDate: '',
    },
    arrival: {
      locationId: '',
      locationName: '',
      locationCode: '',
      countryId: '',
      stateId: 44,
      cityId: 44,
      arrivalDate: '',
    },
  },
}
