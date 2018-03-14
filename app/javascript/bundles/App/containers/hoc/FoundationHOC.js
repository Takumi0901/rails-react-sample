// @flow
import React from 'react'
import NavBar from '../../components/atoms/NavBar'
import Container from '../../components/atoms/Container'
import SideBar from '../../components/organisms/SideBar'

type Props = {
  books: any
}

type State = {
  open: boolean,
  docked: boolean
}

const FoundationHOC = (WrappedComponent: Object) => {
  class Foundation extends React.Component<Props, State> {
    constructor() {
      super()
      this.state = {
        open: false,
        docked: false
      }
    }
    handleToggle() {
      this.setState({
        open: !this.state.open
      })
    }

    handleResize() {
      if (window.matchMedia('(max-width:768px)').matches) {
        this.setState({
          open: false,
          docked: false
        })
      } else {
        this.setState({
          open: true,
          docked: true
        })
      }
    }

    componentDidMount() {
      window.addEventListener('load', this.handleResize.bind(this))
      window.addEventListener('resize', this.handleResize.bind(this))
    }

    componentWillUnmount() {
      window.removeEventListener('load', this.handleResize.bind(this))
      window.removeEventListener('resize', this.handleResize.bind(this))
    }

    render() {
      const {books} = this.props
      return (
        <div>
          <NavBar
            onToggle={() => this.handleToggle()}
            open={this.state.open}
            docked={this.state.docked}
          />
          <SideBar
            onToggle={() => this.handleToggle()}
            open={this.state.open}
            docked={this.state.docked}
            list={books.list}
          />
          <Container docked={this.state.docked}>
            <WrappedComponent {...this.props}/>
          </Container>
        </div>
      )
    }
  }
  return Foundation
}

export default FoundationHOC