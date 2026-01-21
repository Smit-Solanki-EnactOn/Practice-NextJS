import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext<string | undefined>(undefined)
export const ChannelContext = React.createContext<string | undefined>(undefined)

const UseContext = () => {
  return (
    <div>
      <UserContext.Provider value={'smit'}>
        <ChannelContext.Provider value={'solanki'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default UseContext