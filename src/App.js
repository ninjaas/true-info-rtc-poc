import './App.css';

import { startBasicCall, leaveCall} from './agoraSdk/AgoraSdk';

function App() {
  return (
    <div className="App">
      {/* <button onClick={joinChannel}>Join channel</button> */}
      <button onClick={startBasicCall}>Start call</button>
      <button onClick={leaveCall}>End call</button>
    </div>
  );
}

export default App;
