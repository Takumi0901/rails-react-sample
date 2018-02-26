import React, { Component } from 'react'
import {
  Navbar
} from 'react-bootstrap'

class Wrapper extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className={"container"}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Wrapper