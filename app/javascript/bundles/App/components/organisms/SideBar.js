import React from 'react'
import { AppBar, Drawer, Divider } from 'material-ui'
import ListItem from '../atoms/ListItem'

const SideBar = ({onToggle, list}) => (
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
    <ListItem path={"/"} name="本を登録する"/>
    <Divider/>
    {list && list.length > 0 && list.map((e, key) => {
      return (
        <ListItem key={key} path={`/book/${e.id}`} name={e.name}/>
      )
    })}
  </Drawer>
)

export default SideBar