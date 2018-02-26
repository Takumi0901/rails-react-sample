import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom'
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
  Badge
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

export default class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        about: ''
      }
    }
  }

  onHandleChange(e) {
    let data = this.state.data
    data[e.target.name] = e.target.value
    this.setState({
      data: data
    })
  }

  onSubmit(e) {
    this.props.createBook({
      variables: {name: this.state.data.name, about: this.state.data.about},
      refetchQueries: [{
        query: fetchAllBooks
      }]
    })
    this.setState({
      data: {
        name: '',
        about: ''
      }
    })

    this.refs.form.reset()
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
    const {allBooks} = this.props
    return (
      <div>
        <Panel>
          <Panel.Heading>本の登録</Panel.Heading>
          <Panel.Body>
            <form ref={"form"}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>本の名前を入力</ControlLabel>
                <FormControl
                  name={"name"}
                  type="text"
                  value={this.state.name}
                  placeholder="Enter text"
                  onChange={this.onHandleChange.bind(this)}
                />
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl
                  name={"about"}
                  componentClass="textarea"
                  placeholder="textarea"
                  onChange={this.onHandleChange.bind(this)}
                />
              </FormGroup>
              <Button onClick={this.onSubmit.bind(this)} bsStyle="primary" bsSize="large" block>
                登録する
              </Button>
            </form>
          </Panel.Body>
        </Panel>
        <PageHeader>
          Books <small>漫画本一覧</small>
        </PageHeader>
        <ListGroup>
          {allBooks && allBooks.length > 0 && allBooks.map((e, key) => {
            return (
              <ListGroupItem key={key}>
                {e.name} <Badge onClick={this.onClickDelete.bind(this, e.id)}><i className={'glyphicon glyphicon-remove'}></i></Badge>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </div>
    );
  }
}
