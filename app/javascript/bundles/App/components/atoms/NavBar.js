import React from 'react'
import {Link} from 'react-router-dom'
import { AppBar, MenuItem, Drawer, Divider } from 'material-ui'

const NavBar = ({onToggle}) => (
  <AppBar
    title="React Study"
    style={{position: "fixed", top: 0}}
    onLeftIconButtonClick={ () => onToggle()}
  />
)

export default NavBar