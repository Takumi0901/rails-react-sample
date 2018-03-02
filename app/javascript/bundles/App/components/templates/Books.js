import PropTypes from 'prop-types'
import React from 'react'
import {FETCH_ALL_BOOKS_QUERY} from '../../apollo/Books'
import Foundation from '../organisms/Foundation'
import {UpdateBookContent} from '../molecules/UpdateBookContent'

export default class Books extends React.Component {
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
    const {books, handleSubmit} = this.props
    return (
      <Foundation list={books.list}>
        <UpdateBookContent
          card={{title: '本の登録', subtitle: '本の登録をします'}}
          onSubmit={{label: '登録する', method: handleSubmit(this.onSubmit.bind(this))}}
        />
      </Foundation>
    )
  }
}
