// @flow
import React from 'react'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import DetailContent from '../organisms/book/DetailContent'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
import {FETCH_ALL_BOOKS_QUERY} from "../../actions/Books"

type Props = {
  history: Object,
  bookData: Object,
  booksData: any,
  categoryData: Object
}

class DetailBook extends React.Component<Props> {
  constructor() {
    super()
  }


  postAction() {
    this.props.createPost({
      variables: {book_id: parseInt(this.props.match.params.bookId), subject: 'テスト1'}
    })
  }

  render() {
    console.log('*****************')
    console.log(this.props)
    console.log('*****************')
    return (
      <div>
        <DetailContent {...this.props}/>
        <RaisedButton
          label={'コメント'}
          onClick={this.postAction.bind(this)}
          primary={true}
        />
      </div>
    )
  }
}

export default FoundationHOC(DetailBook)