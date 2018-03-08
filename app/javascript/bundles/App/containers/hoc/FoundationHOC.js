// @flow
import React from 'react'
import NavBar from '../../components/atoms/NavBar'
import Container from '../../components/atoms/Container'
import SideBar from '../../components/organisms/SideBar'

type Props = {
  books: any
}

type State = {
  open: boolean
}

const FoundationHOC = (WrappedComponent: Object) => {
  class Foundation extends React.Component<Props, State> {
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
      const {books} = this.props
      return (
        <div>
          <NavBar
            onToggle={() => this.handleToggle()}
            open={this.state.open}
          />
          <SideBar
            onToggle={() => this.handleToggle()}
            open={this.state.open}
            list={books.list}
          />
          <Container>
            <WrappedComponent {...this.props}/>
          </Container>
        </div>
      )
    }
  }
  return Foundation
}

export default FoundationHOC