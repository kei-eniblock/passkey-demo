
import PasskeyCreate from './components/PasskeyCreate.js';
import PasskeyGet from './components/PasskeyGet.js';

function App() {
  return (
    <div className="App">

      <div>
        <button onClick={PasskeyCreate}>Create a Passkey</button>
        <br/>
        This will request your browser to create a new Passkey that will be stored on your device.
      </div>
      <br/>
      <div>
        <button onClick={PasskeyGet}>Verify Passkey</button>
        <br/>
        This will request your browser to sign with the previoulsy created Passkey.
      </div>

    </div>
  );
}

export default App;
