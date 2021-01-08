import useEventsQuery from 'hooks/useEventsQuery'

const useEventsSource = () => {
  const value = useEventsQuery()

  if (value && value.indexOf('NOEO') === -1) {
    return '/api/events/' + value.toLowerCase()
  }
}

export default useEventsSource
