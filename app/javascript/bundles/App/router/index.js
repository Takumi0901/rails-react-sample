// @flow
import React from "react";
import { renderToString } from 'react-dom/server'
import { BrowserRouter, StaticRouter } from 'react-router-dom'


const client = (props) => {
  return (
    <BrowserRouter>
      {props.children}
    </BrowserRouter>
  )
}

const server = (props) => {
  return (
    renderToString(
      <StaticRouter location={props.path} context={{}}>
        {props.children}
      </StaticRouter>
    )
  )
}

const Router = (props: Object) => {
  return typeof window !== 'undefined' ? client(props) : server(props)
}

export default Router