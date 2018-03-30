// @flow
import React from "react"
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import Subheader from 'material-ui/Subheader/Subheader'
import Card from 'material-ui/Card/Card'
import Loading from '../../atoms/Loading'
import {formatDate} from '../../../helper/Date'

type Props = {
  data: any
}

const CommentList = (props: Props) => {

  const list = props.data.book ? props.data.book.posts.edges : []

  if(props.data.book) {
    return (
      <div>
        <Card>
          <List>
            <Subheader>Comments</Subheader>
            {list.map((e, index) => {
              return (
                <ListItem
                  key={index}
                  primaryText={e.node.subject}
                  secondaryText={formatDate(e.node.created_at)}/>
              )
            })}
          </List>
        </Card>
        <Loading/>
      </div>
    )
  } else {
    return null
  }
}

export default CommentList