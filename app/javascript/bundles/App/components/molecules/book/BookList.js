// @flow
import React from "react"
import {Link} from 'react-router-dom'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import Subheader from 'material-ui/Subheader/Subheader'
import Avatar from 'material-ui/Avatar/Avatar'

type Props = {
  onToggle: Function,
  list: any,
  open: boolean,
  docked: boolean
}

const BookList = (props: Props) => {
  return (
    <List>
      <Subheader>Book List</Subheader>
      {props.list && props.list.length > 0 && props.list.map((e, key) => {
        return (
          <Link key={key} to={`/book/${e.id}`}>
            <ListItem
              onClick={() => !props.docked && props.onToggle()}
              primaryText={e.name}
              leftAvatar={<Avatar src={`/assets/images/${e.picture ? e.picture : 'noimage.png'}`}/>}
            />
          </Link>
        )
      })}
    </List>
  )
}

export default BookList