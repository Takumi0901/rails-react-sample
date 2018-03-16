import React from 'react'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import CreateCategoryContent from '../organisms/CreateCategoryContent'
import CategoriesContent from '../organisms/CategoriesContent'
import {FETCH_ALL_CATEGORIES_QUERY} from "../../actions/Category"

// type Props = {
//   createBook: Function,
//   handleSubmit: Function,
//   books: any
// }
//
// type State = {
//   errors: Object,
//   succeeded: boolean,
//   deleted: boolean
// }

class Category extends React.Component {
  constructor() {
    super()
    this.state = {
      isEdit: 0
    }
  }

  onSubmit(values, e) {
    const {createCategory} = this.props
    createCategory({
      variables: {
        name: values.name
      },
      refetchQueries: [{
        query: FETCH_ALL_CATEGORIES_QUERY
      }]
    })
    e.reset()
  }

  onClickDelete(id) {
    const {destroyCategory} = this.props
    destroyCategory({
      variables: {id: id},
      refetchQueries: [{
        query: FETCH_ALL_CATEGORIES_QUERY
      }]
    })
  }


  onSubmitDetail(values) {
    const {updateCategory} = this.props
    updateCategory({
      variables: {
        id: parseInt(values.id),
        name: values.name
      },
      refetchQueries: [{
        query: FETCH_ALL_CATEGORIES_QUERY
      }]
    })
  }


  render() {
    const {categories} = this.props
    return (
      <div>
        <CreateCategoryContent
          card={{title: 'カテゴリ', subtitle: 'カテゴリの管理をします'}}
          onSubmit={{label: '登録する', method: this.onSubmit.bind(this)}}
          onDelete={{}}
        />
        <CategoriesContent
          {...this.state}
          onSubmitDetail={this.onSubmitDetail.bind(this)}
          onClickDelete={this.onClickDelete.bind(this)}
          list={categories.categories}/>
      </div>
    )
  }
}

export default FoundationHOC(Category)
