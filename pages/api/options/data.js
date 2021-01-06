const data = {
  id: 'DATA',
  name: 'Data Overlay',
  defaultOption: 'NODO',
  options: [
    { id: 'NODO', name: 'None' },
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
        { id: 'GLTD-1970', name: '(1970 - 2018)' },
        { id: 'GLTD-2000', name: '(2000 - 2018)' },
        { id: 'GLTD-2015', name: '(2015 - 2018)' },
        { id: 'GLTD-2018', name: '(2018)' },
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

export default (req, res) => {
  res.statusCode = 200
  res.json(data)
}
