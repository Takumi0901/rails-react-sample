// @flow
import React from 'react'
import {FETCH_ALL_BOOKS_QUERY} from '../../apollo/Books'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import UpdateBookContent from '../organisms/UpdateBookContent'

type Props = {
  reset: Function,
  createBook: Function,
  handleSubmit: Function
}

class Books extends React.Component<Props> {
  constructor() {
    super()
  }

  onSubmit(values) {
    const {reset, createBook} = this.props
    createBook({
      variables: {name: values.name, about: values.about},
      refetchQueries: [{
        query: FETCH_ALL_BOOKS_QUERY
      }]
    })
    reset()
  }

  render() {
    const {handleSubmit} = this.props
    return (
      <UpdateBookContent
        card={{title: '本の登録', subtitle: '本の登録をします'}}
        onSubmit={{label: '登録する', method: handleSubmit(this.onSubmit.bind(this))}}
        onDelete={{}}
      />
    )
  }
}

export default FoundationHOC(Books)
