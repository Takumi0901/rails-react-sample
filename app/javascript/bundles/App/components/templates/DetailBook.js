// @flow
import React from 'react'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import DetailContent from '../organisms/book/DetailContent'


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

  render() {
    return (
      <DetailContent {...this.props}/>
    )
  }
}

export default FoundationHOC(DetailBook)