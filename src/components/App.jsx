import NavBar from "./NavBar/NavBar";
import "./App.css";
import Banner from "./Banner/Banner";
import RowPost from "./RowPost/RowPost";
import {originals, action, horror, comedy, romance} from '../urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='NetFlix Originals' />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={horror} title='Horror Movies' isSmall />
      <RowPost url={comedy} title='Comedy Movies' isSmall />
      <RowPost url={romance} title='Romance Movies' isSmall />
    </div>
  );
}

export default App;
