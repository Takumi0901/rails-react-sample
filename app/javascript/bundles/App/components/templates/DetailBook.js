// @flow
import React from 'react'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import DetailContent from '../organisms/book/DetailContent'
import PostComments from '../organisms/book/PostComments'
import CommentList from '../organisms/book/CommentList'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
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

  componentDidMount() {
    this.handleScroll = this.onScroll.bind(this)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  onScroll() {
    const {bookData} = this.props
    let scroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
    let element = document.getElementById('loader')
    let height = element.offsetHeight
    let targetBottom = element.offsetTop + height
    let targetTop = targetBottom - window.innerHeight

    if (scroll <= targetBottom && scroll >= targetTop && !bookData.loading) {
      console.log('*****************')
      console.log('HOHOHOHOHOHOOHOHO')
      console.log('*****************')
      this.fetchMorePosts()
    }
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

  fetchMorePosts() {
    const {bookData, match} = this.props
    bookData.fetchMore({
      variables: {
        id: parseInt(match.params.bookId),
        after: bookData.book.posts.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const prevEdges = previousResult.book.posts.edges
        const newEdges = fetchMoreResult.book.posts.edges
        console.log('newEdges.length *****************')
        console.log(newEdges.length)
        console.log('*****************')
        if(newEdges.length) {
          fetchMoreResult.book.posts.edges = [...prevEdges, ...newEdges]
          return fetchMoreResult
        } else {
          return previousResult
        }
      }
    })
  }

  render() {
    return (
      <div>
        <DetailContent {...this.props}/>
        <PostComments onSubmit={this.postComment.bind(this)}/>
        <CommentList posts={this.props.bookData.book && this.props.bookData.book.posts}/>
        <div id="loader">
          <RaisedButton
            label={"More"}
            onClick={this.fetchMorePosts.bind(this)}
            primary={true}
          />
        </div>
      </div>
    )
  }
}

export default FoundationHOC(DetailBook)