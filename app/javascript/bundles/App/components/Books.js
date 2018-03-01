import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom'
import {Field} from 'redux-form'
import gql from "graphql-tag";
import {
  PageHeader,
  ListGroup,
  ListGroupItem,
  Panel,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Badge,
  Grid,
  Row,
  Col
} from 'react-bootstrap'

const fetchAllBooks = gql`
  query {
    allBooks {
      id
      name
      about
    }
  }
`

const inputForm = ({input, name, type, placeholder, componentClass}) => {
  return (
    <FormControl
      name={name}
      type={type}
      {...input}
      componentClass={componentClass}
      placeholder={placeholder}
    />
  )
}

export default class Books extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(values) {
    const {reset} = this.props
    this.props.createBook({
      variables: {name: values.name, about: values.about},
      refetchQueries: [{
        query: fetchAllBooks
      }]
    })
    reset()
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
    const {allBooks, handleSubmit} = this.props
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={3} md={3}>
            <ListGroup>
              {allBooks && allBooks.length > 0 && allBooks.map((e, key) => {
                return (
                  <ListGroupItem key={key}>
                    {e.name} <Badge onClick={this.onClickDelete.bind(this, e.id)}><i className={'glyphicon glyphicon-remove'}></i></Badge>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
          <Col sm={9} md={9}>
            <PageHeader>
              Book登録
            </PageHeader>
            <form ref={"form"}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>本の名前を入力</ControlLabel>
                <Field
                  component={inputForm}
                  name="name"
                  type="text"
                  placeholder="本の名前を入力"
                />
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>本の詳細</ControlLabel>
                <Field
                  component={inputForm}
                  name="about"
                  componentClass="textarea"
                  placeholder="本の詳細"
                />
              </FormGroup>
              <Button onClick={handleSubmit(this.onSubmit.bind(this))} bsStyle="primary" bsSize="large" block>
                登録する
              </Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
