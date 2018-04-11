// @flow
import React from 'react'
import AppBar from 'material-ui/AppBar/AppBar'
import Drawer from 'material-ui/Drawer/Drawer'
import Divider from 'material-ui/Divider/Divider'
import LinkMenuItem from '../atoms/LinkMenuItem'
import BookList from '../molecules/book/BookList'

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
    <AppBar title="ReactOnRails" showMenuIconButton={false} />
    <LinkMenuItem
      onToggle={props.onToggle}
      docked={props.docked}
      path={'/'}
      name="本を登録する"
    />
    <LinkMenuItem
      onToggle={props.onToggle}
      docked={props.docked}
      path={'/category'}
      name="カテゴリを登録する"
    />
    <Divider />
    <BookList {...props} />
  </Drawer>
)

export default SideBar
