import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, MenuItem, Drawer } from 'material-ui';

class NavBar extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={() => this.props.onToggle()}
          >
            <MenuItem>React</MenuItem>
            <MenuItem>Redux</MenuItem>
            <MenuItem>React Router</MenuItem>
            <MenuItem>Material UI</MenuItem>
            <MenuItem>Electron</MenuItem>
          </Drawer>
          <AppBar
            title="React Study"
            onLeftIconButtonClick={ () => this.props.onToggle()}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default NavBar