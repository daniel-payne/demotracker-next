import NodeCache from 'node-cache'

const TWELVE_HOURS = 12 * 60 * 60
const TWENTY_FOUR_HOURS = 24 * 60 * 60

const cache = new NodeCache({ stdTTL: TWELVE_HOURS }, { checkperiod: TWENTY_FOUR_HOURS })

export default cache
