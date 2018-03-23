/* @flow */
import React from "react"

type Props = {
  children: Object,
  docked: boolean
}

const Container = (props: Props) => {

  let divStyles = {}

  if(props.docked) {
    divStyles = {maxWidth: "800px", width: "auto", margin: "0 0 0 276px", padding: "92px 32px 92px 16px"}
  } else {
    divStyles = {width: "auto", margin: "0 auto", padding: "92px 16px"}
  }

  return (
    <div style={divStyles}>
      {props.children}
    </div>
  )
}

export default Container