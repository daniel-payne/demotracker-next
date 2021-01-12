import CountryInfo from 'components/country/CountryInfo'

export default function CountryList(props) {
  const { countries } = props

  return (
    <div>
      {countries.map((country) => (
        <CountryInfo key={country.id} country={country} />
      ))}
    </div>
  )
}
