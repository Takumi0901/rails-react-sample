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

type State = {
  initLength: number
}

class DetailBook extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {
      initLength: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this))
  }


  componentDidUpdate(prevProps) {
    const {bookData} = this.props
    if(prevProps.bookData !== bookData && !prevProps.bookData.book && bookData.book) {
      this.setState({
        initLength: bookData.book.posts.edges.length
      })
    }
  }


  onScroll() {
    const {bookData} = this.props
    const scroll = (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop)
    if(scroll) {
      const element = document.getElementById('loader') || null
      const height = element ? element.offsetHeight : null
      const targetBottom = element ? element.offsetTop + height : 0
      const targetTop = targetBottom - window.innerHeight

      if (scroll <= targetBottom && scroll >= targetTop && !bookData.loading) {
        this.fetchMorePosts()
      }
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
        if(newEdges.length && newEdges.length <= this.state.initLength) {
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
        <CommentList data={this.props.bookData} {...this.state}/>
      </div>
    )
  }
}

export default FoundationHOC(DetailBook)