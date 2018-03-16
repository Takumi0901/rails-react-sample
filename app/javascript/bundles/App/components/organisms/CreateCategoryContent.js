import React from "react"
import Card from 'material-ui/Card/Card'
import CardTitle from 'material-ui/Card/CardTitle'
import CreateCategoryFields from '../molecules/CreateCategoryFields'
import { Form, Field } from 'react-final-form'
import UpdateBookActions from '../molecules/UpdateBookActions'
import SnackbarWithMessage from '../atoms/SnackbarWithMessage'

const CreateCategoryContent = ({card, onSubmit, onDelete, book, books, errors, succeeded, deleted}) => {

  // let err = []
  //
  // if(Object.keys(errors).length > 0) {
  //   err.push(errors.message)
  // } else if(book.error) {
  //   err.push(book.error.message)
  // } else if(books.error) {
  //   err.push(books.error.message)
  // }

  return (
    <Card style={{marginBottom: "24px"}}>
      <CardTitle title={card.title} subtitle={card.subtitle}/>
      <Form
        onSubmit={onSubmit.method}
        render={({ handleSubmit, pristine, invalid }) => (
          <form>
            <CreateCategoryFields/>
            <UpdateBookActions onSubmit={onSubmit} onDelete={onDelete} handleSubmit={handleSubmit}/>
          </form>
        )}
      />
      {/*<SnackbarWithMessage errors={err} succeeded={succeeded} deleted={deleted}/>*/}
    </Card>
  )
}

export default CreateCategoryContent