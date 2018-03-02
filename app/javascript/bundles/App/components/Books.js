import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom'
import {Field} from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import {FETCH_ALL_BOOKS_QUERY} from '../apollo/Books'
import Foundation from './Foundation'

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
        <div style={{width: "750px", margin: "0 0 0 276px", padding: "92px 16px 0"}}>
          <Card>
            <CardTitle title="本の登録" subtitle="本の登録をします" />
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
                  floatingLabelText="本の説明分を入力"
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
