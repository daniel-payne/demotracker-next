const events = {
  id: 'EVEN',
  name: 'Events Overlay',
  defaultOption: 'NOEO',
  options: [
    { id: 'NOEO', name: 'None' },
    {
      id: 'WITR',
      name: 'Wikipedia Terrorism Reports',
      defaultRange: 'WITR-1970',
      ranges: [
        { id: 'WITR-1970', name: '(1970 - Today)' },
        { id: 'WITR-2000', name: '(2000 - Today)' },
        { id: 'WITR-2015', name: '(2015 - Today)' },
        { id: 'WITR-2018', name: '(2018 - Today)' },
        { id: 'WITR-2020', name: '(2020 - Today)' },
        { id: 'WITR-YTOD', name: 'This Year (2021)' },
        { id: 'WITR-MTOD', name: 'This Month (January)' },
        { id: 'WITR-LATD', name: 'Last Three Days (Since 2 Jan)' },
      ],
    },
    {
      id: 'GLTD',
      name: 'Global Terrorism Database',
      defaultRange: 'GLTD-1970',
      ranges: [
        { id: 'GLTD-1970', name: '(1970 - 2018)', source: '/events?source=GLTD&since=1970' },
        { id: 'GLTD-2000', name: '(2000 - 2018)', source: '/events?source=GLTD&since=2000' },
        { id: 'GLTD-2015', name: '(2015 - 2018)', source: '/events?source=GLTD&since=2015' },
        { id: 'GLTD-2018', name: '(2018)', source: '/events?source=GLTD&since=2018' },
      ],
    },
    {
      id: 'VOME',
      name: 'Voyage Manager Events',
      defaultRange: 'VOME-LATD',
      ranges: [
        { id: 'VOME-2020', name: '(2020 - Today)' },
        { id: 'VOME-YTOD', name: 'This Year (2021)' },
        { id: 'VOME-MTOD', name: 'This Month (January)' },
        { id: 'VOME-LATD', name: 'Last Three Days (Since 2 Jan)' },
      ],
    },
  ],
}

const people = {
  id: 'PEOP',
  name: 'People Overlay',
  defaultOption: 'NOPO',
  options: [
    { id: 'NOPO', name: 'None' },
    { id: 'CUPO', name: 'Current Positions', info: '23 Collogues' },
    { id: 'CUFP', name: 'Current & Future Positions', info: '23 Collogues' },
  ],
}

const filter = {
  id: 'DISP',
  name: 'Data Filter',
  defaultOption: 'ALLR',
  options: [
    { id: 'ALLR', name: 'Show All' },
    { id: 'RECD', name: 'Regions Containing Data' },
  ],
}

const data = { events, people, filter }

export default (req, res) => {
  res.statusCode = 200
  res.json(data)
}
