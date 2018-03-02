import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './NavBar'

class Foundation extends Component {
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
    const {list} = this.props
    return (
      <MuiThemeProvider>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
          list={list}
        />
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default Foundation