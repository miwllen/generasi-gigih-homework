import './App.css';
import 'regenerator-runtime/runtime';
import data from './album/album.js';
import TitleSection from './components/TitleSection/index.jsx'
import SongItem from './components/SongItem/index.jsx'

console.log(process.env.REACT_APP_CLIENT_ID);

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="topNav">Pop Hits</h1>
        <h1 className="topNav">It's 90s</h1>
        <h1 className="topNav">New Song</h1>
      </div>

      <TitleSection title="Your favorite song!"/>
      <SongItem imgUrl={data.album.images[0].url} songTitle={data.album.name} artist={data.album.artists[0].name}/>

      
    </div>
  );
}

export default App;
