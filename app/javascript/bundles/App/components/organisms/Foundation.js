import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {NavBar} from '../molecules/NavBar'

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
    const {list, children} = this.props
    return (
      <MuiThemeProvider>
        <div>
          <NavBar
            onToggle={() => this.handleToggle()}
            open={this.state.open}
            list={list}
          />
          <div style={{width: "750px", margin: "0 0 0 276px", padding: "92px 16px 0"}}>
            {children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Foundation