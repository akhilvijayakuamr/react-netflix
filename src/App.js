
import './App.css'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { actionUrl, orginalUrl, commedyUrl, hororUrl, romanceUrl, trendingUrl } from './Components/urls';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url ={orginalUrl} title = 'Netflix Orginals' />
      <RowPost url ={hororUrl} title = 'Netflix Horror' />
      <RowPost url={actionUrl} title = 'Netflix Action' isSmall/>
      <RowPost url={romanceUrl} title = 'Netflix Romance' isSmall/>
      <RowPost url ={trendingUrl} title = 'Netflix Trending' />
      <RowPost url={commedyUrl} title = 'Netflix Commedy' isSmall/>

    </div>
  );
}

export default App;
