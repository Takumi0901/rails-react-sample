/* @flow */
import React from "react"

const Container = ({children, docked}: {children: Object, docked: boolean}) => {

  let divStyles = {}

  if(docked) {
    divStyles = {maxWidth: "800px", width: "auto", margin: "0 0 0 276px", padding: "92px 32px 0 16px"}
  } else {
    divStyles = {width: "auto", margin: "0 auto", padding: "92px 16px 0"}
  }

  return (
    <div style={divStyles}>
      {children}
    </div>
  )
}

export default Container