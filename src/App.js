import './App.scss';
import React, {Component} from 'react';

import Room from './Room';
import MeetingSidePanel from './MeetingSidePanel';
import Footer from './footer';

const { connect } = require('twilio-video');

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          identity: '',
          room: null
        }

        this.nameInputRef = React.createRef();
      }

      async joinRoom() {
        try {
          const response = await fetch(`https://token-service-6432-dev.twil.io/token?identity=${this.state.identity}`);
          // const response = await fetch(`http://localhost:3000/token?identity=aman`);
          const data = await response.json();
          const room = await connect(data.accessToken, {
            name: this.state.roomName,
            audio: true,
            video: true,
            video: { width: 200, height:200 },
          });
      
          this.setState({ room: room });
        } catch(err) {
          console.log(err);
        }
      }

      returnToLobby() {
        this.setState({ room: null });
      }

      removePlaceholderText(event) {
        if(event.target.id === "identity"){
          this.nameInputRef.current.placeholder = '';
        }
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
                    id={"identity"}
                     ref={this.nameInputRef}
                     value={this.state.identity}
                     onChange={(e) => {this.updateIdentity(e)}}
                     //onClick={this.removePlaceholderText.bind(this)} to use this inside method appropriately we use bind
                     onClick={(e) => {this.removePlaceholderText(e)}}
                     placeholder="What's your name?"/>
                  <button onClick={() => this.joinRoom()} disabled={disabled}>Join Room</button>
                </div>
              : <div className="meetingRoomContainer">
                <div className={"inRow"}>
                <Room returnToLobby={() => this.returnToLobby()} room={this.state.room} />
                     <MeetingSidePanel />
                </div>
                <Footer/>
                     </div>
            }
          </div>
        );
      }
  }
  

export default App;
