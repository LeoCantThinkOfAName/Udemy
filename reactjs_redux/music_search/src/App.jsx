import React, {Component} from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './profile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null
        }
    }

    search() {
        const BASE_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=';
        const API_KEY = '0e5c6594691130af489d03ff04e8c601';
        const FETCH_URL = `${BASE_URL}${this.state.query}&api_key=${API_KEY}&format=json`;

        console.log('FETCH_URL', FETCH_URL);
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            console.log(json.results.artistmatches.artist[0]);
            const artist = json.results.artistmatches.artist[0];
            this.setState({
                artist
            })
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            placeholder="search an artist..."
                            type="text"
                            value={ this.state.query }
                            onChange={event => { this.setState({ query: event.target.value }) }}
                            onKeyPress={ event => {
                                if(event.key === 'Enter') {
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                {
                    this.state.artist !== null
                    ? <Profile artist={ this.state.artist } />
                    : <div></div>
                }
                
                <div className="Gallery">
                    gallery
                </div>
            </div>
        )
    }
}

export default App;