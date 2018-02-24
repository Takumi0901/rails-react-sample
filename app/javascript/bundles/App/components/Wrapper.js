import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar'

class Wrapper extends Component {
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
      <MuiThemeProvider>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default Wrapper