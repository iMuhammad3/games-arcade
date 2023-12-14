import React from 'react'
import "./loader.css"

export const Loader = ({children}) => {
  return (
    <div id='loader-container'>
        <div id='loader'></div>
        <p>{children}</p>
    </div>
  )
}
