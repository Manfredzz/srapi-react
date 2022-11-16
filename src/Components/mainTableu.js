import { useEffect, useState } from 'react';
import '../Assets/bootstrap.min.css';
import { useChannelContext } from '../Contexts/currentChannelContext';

const MainTableu = () => {
   const currentChannel = useChannelContext();
   const [schedule, setSchedule] = useState([]);
   const [filteredTableu, setFilteredTableu] = useState([]);
   const [crrentChannelText, setCurrentChannelText] = useState('P1');

   useEffect(() => {
      const fetchTableu = async () => {
         const data = await fetch(
            `https://api.sr.se/api/v2/scheduledepisodes?format=json&pagination=false&indent=true&channelid=${currentChannel}`
         );
         const rawTableu = await data.json();
         setCurrentChannelText(rawTableu.schedule[0].channel.name);
         const filtered = [];
         for (let key in rawTableu.schedule) {
            if (
               new Date(
                  parseInt(rawTableu.schedule[key].endtimeutc.slice(6, -2))
               ) > Date.now()
            ) {
               filtered.push(rawTableu.schedule[key]);
            }
         }
         setSchedule(filtered);
      };

      const renderChannelList = async () => {
         setFilteredTableu([]);
         schedule.forEach((program) => {
            let endtime = new Date(
               parseInt(program.endtimeutc.slice(6, -2))
            ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            let starttime = new Date(
               parseInt(program.starttimeutc.slice(6, -2))
            ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const newProgram = {
               title: program.title,
               starttime: starttime,
               endtime: endtime,
               description: program.description,
            };
            setFilteredTableu((prev) => [...prev, newProgram]);
         });
      };

      fetchTableu().then(renderChannelList).catch(console.error);
   }, [currentChannel, schedule]);

   return (
      <div className="col-md-8 bg-white border">
         <h2 className="my-4">
            Program på {crrentChannelText} idag från{' '}
            {new Date().toLocaleTimeString([], {
               hour: '2-digit',
               minute: '2-digit',
            })}
         </h2>
         <div id="info">
            {filteredTableu.map((program) => {
               return (
                  <article key={program.starttime}>
                     <h3>{program.title}</h3>
                     <h5>
                        {program.starttime} - {program.endtime}
                     </h5>
                     <p>{program.description}</p>
                  </article>
               );
            })}
         </div>
      </div>
   );
};

export default MainTableu;
