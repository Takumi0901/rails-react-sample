// @flow
import React from "react"
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import Subheader from 'material-ui/Subheader/Subheader'
import Card from 'material-ui/Card/Card'
import {formatDate} from '../../../helper/Date'

type Props = {
  posts: any
}

const CommentList = (props: Props) => {
  if(props.posts && props.posts.edges.length > 0) {
    return (
      <Card>
        <List>
          <Subheader>Comments</Subheader>
          {props.posts.edges.map((e, index) => {
            return (
              <ListItem
                key={index}
                primaryText={e.node.subject}
                secondaryText={formatDate(e.node.created_at)}/>
            )
          })}
        </List>
      </Card>
    )
  } else {
    return null
  }
}

export default CommentList