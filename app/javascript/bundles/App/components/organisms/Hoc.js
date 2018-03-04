import React from 'react'

function enhance(WrappedComponent) {
  class Enhance extends React.Component {
    constructor() {
      super()
      this.state = { data: null };
    }
    componentDidMount() {
      this.setState({ data: 'Hello' });
    }
    render() {
      // 引数で受け取った ComposedComponent に props を渡して返す
      console.log('******************')
      console.log(this.props)
      console.log('******************')
      return <WrappedComponent {...this.props} data={this.state.data}/>
    }
  }
  // Must know exactly which method(s) to copy :(
  return Enhance
}


const MyComponent = (props) => {
  return (
    <div>ほげほげ</div>
  )
}

export default enhance(MyComponent) // Enhanced component