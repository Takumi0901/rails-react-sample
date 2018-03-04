import React from "react"
import {Link} from 'react-router-dom'
import {MenuItem} from 'material-ui'

const ListItem = ({path, name}) => (
  <Link to={path}><MenuItem>{name}</MenuItem></Link>
)

export default ListItem