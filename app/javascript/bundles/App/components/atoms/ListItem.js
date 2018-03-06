// @flow
import React from "react"
import {Link} from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem/MenuItem'

const ListItem = ({path, name}: {path: string, name: string}) => (
  <Link to={path}><MenuItem>{name}</MenuItem></Link>
)

export default ListItem