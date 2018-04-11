// @flow
import React from 'react'
import {
  FETCH_INITIAL_STATE,
  FETCH_SUCCEEDED_STATE,
  FETCH_IS_ERROR_STATE
} from '../../actions/Fetch'
import { FETCH_ALL_BOOKS_QUERY } from '../../actions/Books'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import UpdateContent from '../organisms/book/UpdateContent'
import FieldDropZone from '../molecules/FieldDropZone'

type Props = {
  createBook: Function,
  updatePicture: Function,
  handleSubmit: Function,
  bookData: any,
  booksData: any,
  categoryData: Object
}

type State = {
  errors: Object,
  succeeded: boolean,
  deleted: boolean,
  previewImage: Object
}

class Books extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = { ...FETCH_INITIAL_STATE, previewImage: {} }
  }

  onHandleSelect(files) {
    const { updatePicture } = this.props
    this.setState({
      previewImage: files[0]
    })
    updatePicture({
      variables: { path: files[0] }
    })
      .then(() => {
        this.setState(FETCH_SUCCEEDED_STATE)
      })
      .catch(errors => {
        console.log(errors)
        this.setState(FETCH_IS_ERROR_STATE(errors))
      })
  }

  onHandleRemove() {
    this.setState({
      previewImage: {}
    })
  }

  onSubmit(values, e) {
    const { createBook } = this.props
    createBook({
      variables: { ...values, file: this.state.previewImage.name },
      refetchQueries: [
        {
          query: FETCH_ALL_BOOKS_QUERY
        }
      ]
    })
      .then(() => {
        e.reset()
        this.setState({ ...FETCH_SUCCEEDED_STATE, previewImage: {} })
      })
      .catch(errors => {
        console.log(errors)
        this.setState({ ...FETCH_IS_ERROR_STATE(errors), previewImage: {} })
      })
  }

  render() {
    return (
      <UpdateContent
        {...this.state}
        {...this.props}
        bookData={false}
        card={{ title: '本の登録', subtitle: '本の登録をします' }}
        onHandleSelect={this.onHandleSelect.bind(this)}
        onHandleRemove={this.onHandleRemove.bind(this)}
        onSubmit={{ label: '登録する', method: this.onSubmit.bind(this) }}
        onDelete={{}}
      />
    )
  }
}

export default FoundationHOC(Books)
