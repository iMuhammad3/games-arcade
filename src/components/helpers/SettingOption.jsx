import React from 'react'

export const SettingOption = ({className, children}) => {
  return (
    <div className={`border-b py-2 px-1 ${className}`}>{children}</div>
  )
}
