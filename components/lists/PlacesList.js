import useSWR from 'swr'
import { useState, useEffect } from 'react'

import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'

import Link from 'materialUI/Link.js'

import GlobalInformation from 'components/informations/GlobalInformation'
import CountryInformation from 'components/informations/CountryInformation'

import GroupSeperator from 'components/seperator/GroupSeparator'

import getLocalStorage from 'utils/getLocalStorage'

const testCountries = [
  { name: 'United Kingdom', id: '80' },
  { name: 'India', id: '9' },
  { name: 'Congo', id: '32' },
]

const testStates = [
  { text: 'Essex (United Kingdom)', href: '/country/80' },
  { text: 'Hertfordshire (United Kingdom)', href: '/country/80' },
  { text: 'Cornwall (United Kingdom)', href: '/country/80' },
  { text: 'Hyderabad (India)', href: '/country/9' },
  { text: 'New York (United States)', href: '/country/9' },
]

export default function PlacesList() {
  const { PlacesList } = useStyles()

  const [savedCountries, setSavedCountries] = useState([])
  const [savedStates, setSavedStates] = useState([])

  useEffect(() => {
    const countries = getLocalStorage('SAVED-COUNTRIES', testCountries)
    const states = getLocalStorage('SAVED-STATES', testStates)

    if (countries) {
      setSavedCountries(countries)
    }
    if (states) {
      setSavedStates(states)
    }
  }, [])

  return (
    <div className={PlacesList}>
      <GlobalInformation />

      <GroupSeperator />
      <Divider variant="fullWidth" />
      <GroupSeperator />

      {savedCountries.map((country) => {
        return <CountryInformation key={country.id} country={country} />
      })}

      <GroupSeperator />
      <Divider variant="fullWidth" />
      <GroupSeperator />

      {savedStates.map((link, i) => {
        return (
          <div style={{ padding: 4, marginRight: 8, display: 'inline-block' }} key={i}>
            <Button variant="outlined" color="primary" component={Link} naked href={link.href}>
              {link.text}
            </Button>
          </div>
        )
      })}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  PlacesList: {},
}))
