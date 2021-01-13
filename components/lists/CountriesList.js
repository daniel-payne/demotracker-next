import CountryInformation from 'components/informations/CountryInformation'

export default function CountryList(props) {
  const { countries } = props

  return (
    <div>
      {countries.map((country) => (
        <CountryInformation key={country.id} country={country} />
      ))}
    </div>
  )
}
