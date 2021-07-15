import React from 'react';
import './style.css';

class TitleSection extends React.Component {

    render(){
        return <h1 className="songsTitle">{this.props.title}</h1>
    }
}

export default TitleSection;