import { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import SearchIcon from '@material-ui/icons/Search'

import LeftSideBar from 'layouts/components/bars/LeftSideBar'

export default function HeaderBar() {
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
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {/* <Link color="textSecondary">World</Link>
      <span color="textSecondary">&nbsp;/&nbsp;</span>
      <Link color="textSecondary">United Kingdom</Link>
      <span color="textSecondary">&nbsp;/&nbsp;</span> */}
          <span color="textPrimary">London</span>
        </Typography>

        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <Button color="inherit" variant="outlined" aria-label="login">
          Login
        </Button>
      </Toolbar>
      <LeftSideBar open={open} onOpen={handleOpen} onClose={handleClose} />
    </AppBar>
  )
}
