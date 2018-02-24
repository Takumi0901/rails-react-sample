import React, { Component } from 'react'
import NavBar from './NavBar'

class Wrap extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Wrap;