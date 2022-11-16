import { useState, useEffect } from 'react';
import '../Assets/bootstrap.min.css';
import '../Assets/styles.css';
import { useUppdateChannelContext } from '../Contexts/currentChannelContext';

const ChannelList = () => {
   const updateChannel = useUppdateChannelContext();

   const [channels, setChannels] = useState([]);
   const [rowCount, setRowCount] = useState(10);
   useEffect(() => {
      const fetchChannels = async () => {
         const data = await fetch(
            `https://api.sr.se/api/v2/channels?format=json&pagination=false&indent=true`
         );
         const SRobject = await data.json();
         const channels = SRobject.channels;
         setChannels(channels);
      };
      fetchChannels().catch(console.error);
   }, []);

   const channelChoosen = ({ target }) => {
      updateChannel(target.id);
   };

   return (
      <div className="col-md-4 bg-light">
         <section className="clist">
            <h3>Bläddra via kanal</h3>
            <nav id="mainnav">
               <ul id="mainnavlist">
                  {channels
                     .filter((channel, idx) => idx < rowCount)
                     .map((channel) => {
                        return (
                           <li
                              onClick={channelChoosen}
                              key={channel.id}
                              title={channel.tagline}
                              id={channel.id}>
                              {channel.name}
                           </li>
                        );
                     })}
               </ul>
               <div className="spacer" id="shownumrows">
                  <label htmlFor="numrows">Max antal: </label>
                  <input
                     type="number"
                     id="numrows"
                     value={rowCount}
                     min="1"
                     max="2000"
                     onChange={({ target }) => setRowCount(target.value)}
                  />
                  &nbsp;&nbsp;
                  <p>Välj antal kanaler att lista..</p>
               </div>
            </nav>
         </section>
      </div>
   );
};

export default ChannelList;
