import '../Assets/bootstrap.min.css';
import ChannelList from '../Components/channelList';
import MainTableu from '../Components/mainTableu';
import Footer from '../Components/footer';

function MainPage() {
   return (
      <div className="container bg-light border py-4">
         <h2>Lista, spela och se tablå för SR-kanaler! (Siten är under uppbyggnad)</h2>

         <div className="container">
            <div className="row">
               <ChannelList />
               <MainTableu />
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default MainPage;