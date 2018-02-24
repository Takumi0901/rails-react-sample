import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Books extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {allBooks} = this.props
    console.log('******************')
    console.log(this.props)
    console.log('******************')
    return (
      <div style={{margin: "24px"}}>
        <h1 style={{fontSize: "24px", textAlign: "center", marginBottom: "24px"}}>Books</h1>
        <ul>
          {allBooks && allBooks.length > 0 && allBooks.map((e, key) => {
            return (
              <li key={key} style={{marginBottom: "24px"}}>
                <Card>
                  <CardTitle title={e.name} subtitle="book subtitle" />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                  </CardActions>
                </Card>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}
