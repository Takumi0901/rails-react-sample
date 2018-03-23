// @flow
import React from "react"
import Avatar from 'material-ui/Avatar/Avatar'
import Divider from 'material-ui/Divider/Divider'
import Card from 'material-ui/Card/Card'
import CardActions from 'material-ui/Card/CardActions'
import CardTitle from 'material-ui/Card/CardTitle'
import CardText from 'material-ui/Card/CardText'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'

type Props = {
  bookData: Object,
  categoryData: Object,
  history: Object
}

const DetailBookContent = (props: Props) => {
  if(props.bookData.book) {
    const [category] = props.categoryData.categories.filter(e => parseInt(e.id) === props.bookData.book.category_id)
    return (
      <Card>
        <CardTitle title={props.bookData.book.name} subtitle={`${props.bookData.book.author} | ${category.name}`}/>
        <CardText style={{textAlign: "center"}}>
          <Avatar src={`/assets/images/${props.bookData.book.picture ? props.bookData.book.picture : 'noimage.png'}`} size={300}/>
        </CardText>
        {props.bookData.book.url &&
          <CardText style={{textAlign: "right"}}>
            <RaisedButton
              label={"ウィキペディア"}
              href={props.bookData.book.url}
              target="_blank"
            />
          </CardText>
        }
        <CardText style={{lineHeight: "1.6"}}>
          {props.bookData.book.description}
        </CardText>
        <Divider/>
        <CardActions>
          <RaisedButton
            label={"編集"}
            onClick={() => props.history.push(`/book/${props.bookData.book.id}/edit`)}
            primary={true}
          />
        </CardActions>
      </Card>
    )
  }else {
    return null
  }

}

export default DetailBookContent