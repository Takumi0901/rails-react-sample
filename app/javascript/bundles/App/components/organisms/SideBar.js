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

const SideBar = (props: Props) => (
  <Drawer
    docked={props.docked}
    width={260}
    open={props.open}
    onRequestChange={() => props.onToggle()}
  >
    <AppBar
      title="ReactOnRails"
      showMenuIconButton={false}
    />
    <ListItem onToggle={props.onToggle} docked={props.docked} path={"/"} name="本を登録する"/>
    <ListItem onToggle={props.onToggle} docked={props.docked} path={"/category"} name="カテゴリを登録する"/>
    <Divider/>
    {props.list && props.list.length > 0 && props.list.map((e, key) => {
      return (
        <ListItem onToggle={props.onToggle} docked={props.docked} key={key} path={`/book/${e.id}`} name={e.name}/>
      )
    })}
  </Drawer>
)

export default SideBar