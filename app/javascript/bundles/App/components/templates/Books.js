// @flow
import React from 'react'
import {FETCH_ALL_BOOKS_QUERY} from '../../apollo/Books'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import UpdateBookContent from '../organisms/UpdateBookContent'

type Props = {
  createBook: Function,
  handleSubmit: Function
}

class Books extends React.Component<Props> {
  constructor() {
    super()
  }

  onSubmit(values, e) {
    const {createBook} = this.props
    createBook({
      variables: {
        name: values.name,
        description: values.description,
        author: values.author,
        url: values.url
      },
      refetchQueries: [{
        query: FETCH_ALL_BOOKS_QUERY
      }]
    })
    e.reset()
  }

  render() {
    return (
      <div>
        <UpdateBookContent
          bookItem={false}
          card={{title: '本の登録', subtitle: '本の登録をします'}}
          onSubmit={{label: '登録する', method: this.onSubmit.bind(this)}}
          onDelete={{}}
        />
      </div>
    )
  }
}

export default FoundationHOC(Books)
