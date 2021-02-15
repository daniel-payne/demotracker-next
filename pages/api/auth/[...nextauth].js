import NextAuth from 'next-auth'

import Providers from 'next-auth/providers'

const SITE = process.env.NEXTAUTH_URL
const PASSWORD = process.env.NEXTAUTH_PASSWORD
const THIRTY_DAYS = 30 * 24 * 60 * 60

const checkCredentials = (userName, password, PWD = PASSWORD) => {
  return password === PASSWORD ? { id: 1, name: 'J Smith', email: 'jsmith@example.com' } : null
}

const options = {
  site: SITE,
  jwt: true,
  maxAge: THIRTY_DAYS,
  providers: [
    Providers.Credentials({
      name: 'Your Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Please enter your EMail' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const { username, password } = credentials

        const user = checkCredentials(username, password)

        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      },
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options)
