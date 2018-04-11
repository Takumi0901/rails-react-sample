// @flow
import React from 'react'
import NavBar from '../../components/atoms/NavBar'
import Container from '../../components/atoms/Container'
import SideBar from '../../components/organisms/SideBar'
import { DRAWER_VIEWPORT_PC, DRAWER_VIEWPORT_SP } from '../../actions/Drawer'

type Props = {
  booksData: any,
  history: Object,
  match: Object
}

type State = {
  open: boolean,
  docked: boolean
}

const FoundationHOC = (WrappedComponent: Object) => {
  class Foundation extends React.Component<Props, State> {
    constructor() {
      super()
      this.state = DRAWER_VIEWPORT_PC
      window.addEventListener('load', this.handleResize.bind(this))
      window.addEventListener('resize', this.handleResize.bind(this))
    }

    handleToggle() {
      this.setState({
        open: !this.state.open
      })
    }

    handleResize() {
      if (window.matchMedia('(max-width:768px)').matches) {
        this.setState(DRAWER_VIEWPORT_SP)
      } else {
        this.setState(DRAWER_VIEWPORT_PC)
      }
    }

    componentDidMount() {
      if (window.matchMedia('(max-width:768px)').matches) {
        this.setState(DRAWER_VIEWPORT_SP)
      } else {
        this.setState(DRAWER_VIEWPORT_PC)
      }
    }

    componentDidUpdate(prevProps, prevState) {
      setTimeout(() => {
        /** ブラウザバックならreturn **/
        if (this.props.history.action === 'POP') {
          return
        }

        if (prevProps.match !== this.props.match) {
          /** それ以外はページトップへ移動 **/
          window.scrollTo(0, 0)
        }
      })
    }

    componentWillUnmount() {
      window.removeEventListener('load', this.handleResize.bind(this))
      window.removeEventListener('resize', this.handleResize.bind(this))
    }

    render() {
      const { booksData } = this.props
      return (
        <div>
          <NavBar {...this.state} onToggle={() => this.handleToggle()} />
          <SideBar
            {...this.state}
            onToggle={() => this.handleToggle()}
            list={booksData.books}
          />
          <Container docked={this.state.docked}>
            <WrappedComponent {...this.props} />
          </Container>
        </div>
      )
    }
  }
  return Foundation
}

export default FoundationHOC
