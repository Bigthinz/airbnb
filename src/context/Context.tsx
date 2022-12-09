import React,{Component} from 'react'

interface UserCtx {
   
  }

const ContextProvider = React.createContext<UserCtx | null>(null)

class RoomProvider extends Component{

    render(){
        return(
            <ContextProvider.Provider value=''>
                {/* {this.props.children} */}
            </ContextProvider.Provider>
        )
    }


}



const ConsumerProvider = ContextProvider.Consumer

export  {RoomProvider, ConsumerProvider}