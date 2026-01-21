import { UserContext, ChannelContext } from './UseContext'

const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {name => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return <div>User Context value - {name}, and channel context value - {channel}</div>
              }}
            </ChannelContext.Consumer>
          ) 
        }}
      </UserContext.Consumer>
      ComponentF
    </div>
  )
}

export default ComponentF