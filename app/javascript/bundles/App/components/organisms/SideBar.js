// @flow
import React from 'react'
import AppBar from 'material-ui/AppBar/AppBar'
import Drawer from 'material-ui/Drawer/Drawer'
import Divider from 'material-ui/Divider/Divider'
import ListItem from '../atoms/ListItem'

type Props = {
  onToggle: Function,
  list: any,
  open: boolean,
  docked: boolean
}

const SideBar = ({onToggle, list, open, docked}: Props) => (
  <Drawer
    docked={docked}
    width={260}
    open={open}
    onRequestChange={() => onToggle()}
  >
    <AppBar
      title="ReactOnRails"
      showMenuIconButton={false}
    />
    <ListItem onToggle={onToggle} docked={docked} path={"/"} name="本を登録する"/>
    <ListItem onToggle={onToggle} docked={docked} path={"/category"} name="カテゴリを登録する"/>
    <Divider/>
    {list && list.length > 0 && list.map((e, key) => {
      return (
        <ListItem onToggle={onToggle} docked={docked} key={key} path={`/book/${e.id}`} name={e.name}/>
      )
    })}
  </Drawer>
)

export default SideBar