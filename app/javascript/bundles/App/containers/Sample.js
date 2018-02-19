import React from 'react'
import {Link} from 'react-router-dom'

export default class Sample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>sample</h3>
        <p><Link to={"/hello_world"}>hello_worldへ</Link></p>
      </div>
    )
  }
}
