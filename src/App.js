import './App.scss';
import React, {Component} from 'react';

import Room from './Room';

const { connect } = require('twilio-video');

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          identity: '',
          room: null
        }

        this.inputRef = React.createRef();
      }

      async joinRoom() {
        try {
          const response = await fetch(`https://token-service-6432-dev.twil.io/token?identity=${this.state.identity}`);
          const data = await response.json();
          const room = await connect(data.accessToken, {
            name: 'test-room',
            audio: true,
            video: true
          });
      
          this.setState({ room: room });
        } catch(err) {
          console.log(err);
        }
      }

      returnToLobby() {
        this.setState({ room: null });
      }

      removePlaceholderText() {
        this.inputRef.current.placeholder = '';
      }

      updateIdentity(event) {
        this.setState({
          identity: event.target.value
        });
      }
      
      render() {
        const disabled = this.state.identity === '' ? true : false;
        return (
          <div className="app">
            { 
              this.state.room === null
              ? <div className="lobby">
                  <input 
                     ref={this.inputRef}
                     value={this.state.identity}
                     onChange={(e) => {this.updateIdentity(e)}}
                     //onClick={this.removePlaceholderText.bind(this)} to use this inside method appropriately we use bind
                     onClick={() => {this.removePlaceholderText()}}
                     placeholder="What's your name?"/>
                  <button onClick={() => this.joinRoom()} disabled={disabled}>Join Room</button>
                </div>
              : <Room returnToLobby={() => this.returnToLobby()} room={this.state.room} />
            }
          </div>
        );
      }
  }
  

export default App;
