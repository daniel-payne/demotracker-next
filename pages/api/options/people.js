const data = {
  id: 'PEOP',
  name: 'People Overlay',
  defaultOption: 'NOPO',
  options: [
    { id: 'NOPO', name: 'None' },
    { id: 'CUPO', name: 'Current Positions', info: '23 Collogues' },
    { id: 'CUFP', name: 'Current & Future Positions', info: '23 Collogues' },
  ],
}

export default (req, res) => {
  res.statusCode = 200
  res.json(data)
}
