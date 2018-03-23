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

const ListItem = (props: Props) => (
  <Link to={props.path}><MenuItem onClick={() => !props.docked && props.onToggle()}>{props.name}</MenuItem></Link>
)

export default ListItem