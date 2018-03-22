// @flow
import React from 'react'
import NavBar from '../../components/atoms/NavBar'
import Container from '../../components/atoms/Container'
import SideBar from '../../components/organisms/SideBar'
import {DRAWER_VIEWPORT_PC, DRAWER_VIEWPORT_SP} from '../../actions/Drawer'

type Props = {
  booksData: any
}

type State = {
  open: boolean,
  docked: boolean
}

const DropZoneHOC = (WrappedComponent: Object) => {
  class dropZone extends React.Component<Props, State> {
    constructor() {
      super()
      this.state = {
        dropDownImage: {}
      }
    }

    onHandleSelect(files) {
      console.log('*****************')
      console.log(files[0].preview)
      console.log('*****************')
      this.setState({
        dropDownImage: files[0]
      })
    }

    onHandleRemove() {
      this.setState({
        dropDownImage: {}
      })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          onHandleSelect={this.onHandleSelect.bind(this)}
          onHandleRemove={this.onHandleRemove.bind(this)}/>
      )
    }
  }
  return dropZone
}

export default DropZoneHOC