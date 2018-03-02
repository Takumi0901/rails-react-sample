import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { AppBar, MenuItem, Drawer, Divider } from 'material-ui'

class NavBar extends Component {
  render() {
    const {list} = this.props
    return (
      <div>
        <Drawer
          docked={true}
          width={260}
          open={true}
          onRequestChange={() => this.props.onToggle()}
        >
          <AppBar
            title="React Study"
            showMenuIconButton={false}
          />
          <Link to={"/"}><MenuItem>本を登録する</MenuItem></Link>
          <Divider/>
          {list && list.length > 0 && list.map((e, key) => {
            return (
              <Link key={key} to={`/book/${e.id}`}><MenuItem>{e.name}</MenuItem></Link>
            )
          })}
        </Drawer>
        <AppBar
          title="React Study"
          style={{position: "fixed", top: 0}}
          onLeftIconButtonClick={ () => this.props.onToggle()}
        />
      </div>
    );
  }
}

export default NavBar