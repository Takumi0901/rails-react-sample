import React from 'react'
import {Link} from 'react-router-dom'
import { AppBar, MenuItem, Drawer, Divider } from 'material-ui'

export const NavBar = ({onToggle, list}) => (
  <div>
    <Drawer
      docked={true}
      width={260}
      open={true}
      onRequestChange={() => onToggle()}
    >
      <AppBar
        title="ReactOnRails"
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
      onLeftIconButtonClick={ () => onToggle()}
    />
  </div>
)