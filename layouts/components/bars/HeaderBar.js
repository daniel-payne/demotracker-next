import { useState } from 'react'

import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SearchIcon from '@material-ui/icons/Search'

import RightSideBar from 'layouts/components/bars/RightSideBar'

export default function HeaderBar(props) {
  const { title, back } = props
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" passHref>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <DashboardIcon />
          </IconButton>
        </Link>

        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link href="/globe">
            <span>{back}&nbsp;&nbsp;&nbsp;</span>
          </Link>
          <span color="textPrimary">{title}</span>
        </Typography>

        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <Button color="inherit" variant="outlined" aria-label="login">
          Login
        </Button>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <RightSideBar open={open} onOpen={handleOpen} onClose={handleClose} />
    </AppBar>
  )
}
