// @flow
import React from "react"
import {Link} from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem/MenuItem'

const ListItem = ({path, name, onToggle}: {path: string, name: string, onToggle: Function}) => (
  <Link to={path}><MenuItem onClick={() => onToggle()}>{name}</MenuItem></Link>
)

export default ListItem