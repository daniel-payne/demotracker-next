import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

import Link from 'materialUI/Link.js'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SearchIcon from '@material-ui/icons/Search'

import RightSideBar from 'layouts/components/bars/RightSideBar'

export default function ApplicationBar(props) {
  const { title, back, backUrl } = props

  const [open, setOpen] = useState(false)
  const [session, loading] = useSession()

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handelLogin = () => {
    signIn()
  }

  const handelLogout = () => {
    signOut()
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <span color="textPrimary">{title}</span>
        </Typography>
        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
        {!session && (
          <Button color="inherit" variant="outlined" aria-label="login" onClick={handelLogin}>
            Login
          </Button>
        )}
        {session && (
          <Button color="inherit" variant="outlined" aria-label="login" onClick={handelLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
