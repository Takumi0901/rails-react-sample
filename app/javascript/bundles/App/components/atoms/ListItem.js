// @flow
import React from "react"
import {Link} from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem/MenuItem'

type Props = {
  path: string,
  name: string,
  onToggle: Function,
  docked: boolean
}

const ListItem = ({path, name, onToggle, docked}: Props) => (
  <Link to={path}><MenuItem onClick={() => !docked && onToggle()}>{name}</MenuItem></Link>
)

export default ListItem