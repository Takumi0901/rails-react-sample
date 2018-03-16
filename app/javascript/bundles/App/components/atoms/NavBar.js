// @flow
import React from 'react'
import AppBar from 'material-ui/AppBar/AppBar'

const NavBar = ({onToggle}: {onToggle: Function}) => (
  <AppBar
    title="React Study"
    style={{position: "fixed", top: 0}}
    onLeftIconButtonClick={ () => onToggle()}
  />
)

export default NavBar