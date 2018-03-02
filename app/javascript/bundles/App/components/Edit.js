import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom'
import {Field} from 'redux-form'
import gql from "graphql-tag";
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Foundation from './Foundation'

const fetchAllBooks = gql`
  query {
    allBooks {
      id
      name
      about
    }
  }
`

const fetchBook = gql`
  query fetchBook($id: ID!){
    book(id: $id) {
      id
      name
      about
    }
  }
`

const inputForm = ({input, hintText, floatingLabelText, floatingLabelFixed, fullWidth, multiLine, row, rowsMax}) => {
  return (
    <TextField
      {...input}
      hintText={hintText}
      floatingLabelText={floatingLabelText}
      floatingLabelFixed={floatingLabelFixed}
      fullWidth={fullWidth}
      multiLine={multiLine}
      rows={row}
      rowsMax={rowsMax}
    />
  )
}

export default class EditBook extends React.Component {
  constructor() {
    super()
  }

  onSubmit(values) {
    const {match} = this.props
    this.props.updateBook({
      variables: {id: match.params.bookId, name: values.name, about: values.about},
      refetchQueries: [{
        query: fetchBook,
        variables: {
          id: match.params.bookId,
        },
      }]
    })
  }


  onClickDelete(id) {
    this.props.destroyBook({
      variables: {id: id},
      refetchQueries: [{
        query: fetchAllBooks
      }]
    })
  }

  render() {
    const {book, allBooks, handleSubmit} = this.props
    return (
      <Foundation list={allBooks}>
        <div style={{width: "750px", margin: "0 0 0 276px", padding: "92px 16px 0"}}>
          <Card>
            <CardTitle title={book && `${book.name}`} subtitle="本の編集をします" />
            <CardText>
              <form>
                <Field
                  name="name"
                  component={inputForm}
                  hintText="例) ドラゴンボール"
                  floatingLabelText="本のタイトルを入力"
                  floatingLabelFixed={true}
                  fullWidth={true}
                />
                <Field
                  component={inputForm}
                  name="about"
                  hintText="例) cha-ra he-cha-ra"
                  floatingLabelText="本の説明文を入力"
                  multiLine={true}
                  fullWidth={true}
                  rows={4}
                  rowsMax={4}
                />
              </form>
            </CardText>
            <CardActions>
              <RaisedButton
                label="登録する"
                fullWidth={true}
                onClick={handleSubmit(this.onSubmit.bind(this))}
                primary={true}
              />
            </CardActions>
          </Card>
        </div>
      </Foundation>
    );
  }
}
