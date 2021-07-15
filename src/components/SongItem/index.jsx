import React from 'react';
import './style.css';

class SongItem extends React.Component {
    constructor(props){
        super(props);
        this.showAlert = this.showAlert.bind(this)
    }

    showAlert(){
        alert(`You selected ${this.props.songTitle} !`)
      }

    render(){
        return <div className="itemContainer">
                <input type="image" src={this.props.imgUrl} alt="image"/>
                <p className="songTitle">{this.props.songTitle}</p>
                <p className="artist">{this.props.artist}</p>
                <button className="selectButton" onClick={this.showAlert}>Select</button>
            </div>
    }
}

export default SongItem;