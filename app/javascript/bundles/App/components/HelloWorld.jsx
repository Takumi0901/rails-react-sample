import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom'

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  render() {
    return (
      <div>
        <h3>
          Hello, {this.props.name}!
        </h3>
        <p><Link to={"/"}>sampleへ</Link></p>
        <hr />
        <form >
          <label htmlFor="name">
            hoge! Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.props.name}
            onChange={(e) => this.props.updateName(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
