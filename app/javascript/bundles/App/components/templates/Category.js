// @flow
import React from 'react'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import CreateContent from '../organisms/category/CreateContent'
import UpdateContent from '../organisms/category/UpdateContent'
import { FETCH_ALL_CATEGORIES_QUERY } from '../../actions/Category'
import {
  FETCH_DELETED_STATE,
  FETCH_INITIAL_STATE,
  FETCH_IS_ERROR_STATE,
  FETCH_SUCCEEDED_STATE
} from '../../actions/Fetch'

type Props = {
  createCategory: Function,
  destroyCategory: Function,
  updateCategory: Function,
  categoryData: Object,
  bookData: Object,
  booksData: any
}

type State = {
  errors: Object,
  succeeded: boolean,
  deleted: boolean
}

class Category extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = FETCH_INITIAL_STATE
  }

  onSubmit(values, e) {
    const { createCategory } = this.props
    createCategory({
      variables: { ...values },
      refetchQueries: [
        {
          query: FETCH_ALL_CATEGORIES_QUERY
        }
      ]
    })
      .then(() => {
        e.reset()
        this.setState(FETCH_SUCCEEDED_STATE)
      })
      .catch(errors => {
        console.log(errors)
        this.setState(FETCH_IS_ERROR_STATE(errors))
      })
  }

  onClickDelete(id) {
    const { destroyCategory } = this.props
    destroyCategory({
      variables: { id: id },
      refetchQueries: [
        {
          query: FETCH_ALL_CATEGORIES_QUERY
        }
      ]
    })
      .then(() => {
        this.setState(FETCH_DELETED_STATE)
      })
      .catch(errors => {
        console.log(errors)
        this.setState(FETCH_IS_ERROR_STATE(errors))
      })
  }

  onSubmitDetail(values) {
    const { updateCategory } = this.props
    updateCategory({
      variables: { id: parseInt(values.id), ...values },
      refetchQueries: [
        {
          query: FETCH_ALL_CATEGORIES_QUERY
        }
      ]
    })
      .then(() => {
        this.setState(FETCH_SUCCEEDED_STATE)
      })
      .catch(errors => {
        console.log(errors)
        this.setState(FETCH_IS_ERROR_STATE(errors))
      })
  }

  isSucceededDecision(prevSucceeded) {
    return prevSucceeded !== this.state.succeeded && this.state.succeeded
  }

  isDeletedDecision(prevDeleted) {
    return prevDeleted !== this.state.deleted && this.state.deleted
  }

  isErrorDecision(prevError) {
    return (
      prevError !== this.props.categoryData.error &&
      this.props.categoryData.error
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.isSucceededDecision(prevState.succeeded) ||
      this.isDeletedDecision(prevState.deleted) ||
      this.isErrorDecision(prevProps.categoryData.error)
    ) {
      setTimeout(() => this.setState(FETCH_INITIAL_STATE), 1800)
    }
  }

  render() {
    const { categoryData } = this.props
    return (
      <div>
        <CreateContent
          card={{ title: 'カテゴリ', subtitle: 'カテゴリの管理をします' }}
          onSubmit={{ label: '登録する', method: this.onSubmit.bind(this) }}
          onDelete={{}}
        />
        <UpdateContent
          {...this.props}
          {...this.state}
          onSubmitDetail={this.onSubmitDetail.bind(this)}
          onClickDelete={this.onClickDelete.bind(this)}
          list={categoryData.categories}
        />
      </div>
    )
  }
}

export default FoundationHOC(Category)
