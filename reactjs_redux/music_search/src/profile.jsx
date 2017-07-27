import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
    render() {
        let artist = '';
        artist = this.props.artist !== null ? this.props.artist : artist;

        return (
            <div>
                <img 
                    src={ artist.image ? artist.image[2]['#text'] : null }
                    alt="Profile"
                    className="profile-img"
                />
                <div className="profile-info">
                    <div className="profile-name">Artist: { artist.name }</div>
                    <div className="profile-followers">Listeners: { artist.listeners }</div>
                </div>
            </div>
        )
    }
}

export default Profile;