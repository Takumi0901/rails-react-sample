// @flow
import React from 'react'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import DetailContent from '../organisms/book/DetailContent'
import PostComments from '../organisms/book/PostComments'
import CommentList from '../organisms/book/CommentList'
import {FETCH_BOOK_QUERY} from "../../actions/Books"
import {FETCH_IS_ERROR_STATE, FETCH_SUCCEEDED_STATE} from "../../actions/Fetch"

type Props = {
  history: Object,
  bookData: Object,
  booksData: any,
  categoryData: Object,
  createPost: Function,
  match: Object
}

class DetailBook extends React.Component<Props> {
  constructor() {
    super()
  }


  postComment(values, e) {
    const {createPost, match} = this.props
    createPost({
      variables: {book_id: parseInt(match.params.bookId), ...values},
      refetchQueries: [{
        query: FETCH_BOOK_QUERY,
        variables: {
          id: parseInt(match.params.bookId)
        }
      }]
    }).then(() => {
      e.reset()
      this.setState(FETCH_SUCCEEDED_STATE)
    }).catch((errors) => {
      console.log(errors.message)
      this.setState(FETCH_IS_ERROR_STATE(errors))
    })
  }

  render() {
    return (
      <div>
        <DetailContent {...this.props}/>
        <PostComments onSubmit={this.postComment.bind(this)}/>
        <CommentList posts={this.props.bookData.book && this.props.bookData.book.posts}/>
      </div>
    )
  }
}

export default FoundationHOC(DetailBook)