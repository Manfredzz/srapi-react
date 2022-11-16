import { useState, useEffect } from 'react';
import '../Assets/bootstrap.min.css';

export const ChannelList = () => {
    
    channels.forEach((element) => {
        let newOption = document.createElement('option');
        newOption.setAttribute('value', element.liveaudio.url);
        newOption.setAttribute('id', element.id);
        newOption.appendChild(document.createTextNode(element.name));
        playerList.appendChild(newOption);
      });

   return (

   );
};
