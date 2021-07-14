import './App.css';
import 'regenerator-runtime/runtime';
import data from './album/album.js';

console.log(process.env.REACT_APP_CLIENT_ID);

function showAlert(){
  alert(`You choose: ${data.album.name} as your fav!`)
}

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="topNav">Pop Hits</h1>
        <h1 className="topNav">It's 90s</h1>
        <h1 className="topNav">New Song</h1>
      </div>
    
      <h1 className="songsTitle">Music You Might Like</h1>
      <div className="itemContainer">
      <input type="image" src={data.album.images[1].url} alt="img" />
        <p className="songTitle">{data.album.name}</p>
        <p className="artist">{data.album.artists[0].name}</p>
        <button className="selectButton" onClick={showAlert}>Select</button>
      </div>
    </div>
  );
}

export default App;
