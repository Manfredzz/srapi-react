import React, { useContext, useState } from 'react';

const ChannelContext = React.createContext()
const UppdateChannelContext = React.createContext() 


export const useChannelContext = () =>{
    return useContext(ChannelContext);
} 

export const useUppdateChannelContext = () =>{
    return useContext(UppdateChannelContext);
} 

export const CurrentChannelContext = ({children}) => {
   const [currentChannel, setCurrentChannel] = useState('132');
   
   const changeChannel = (id) => {
    setCurrentChannel(id)
   }   
   
    return (
      <ChannelContext.Provider value={currentChannel}>
        <UppdateChannelContext.Provider value={changeChannel}>
           {children}
        </UppdateChannelContext.Provider>
      </ChannelContext.Provider>
   );
}

