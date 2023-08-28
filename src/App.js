
import PasskeyCreate from './components/PasskeyCreate.js';
import PasskeyCreateExternal from './components/PasskeyCreateExternal.js';
import PasskeyGet from './components/PasskeyGet.js';

function App() {
  return (
    <div className="App">

      <div>
        <button onClick={PasskeyCreate}>Create Local Passkey</button>
        <br/>
        This will request your browser to create a new Passkey that will be stored on your device.
      </div>
      <br/>
      
      <div>
        <button onClick={PasskeyCreateExternal}>Create External Passkey</button>
        <br/>
         This will request your browser to create a new Passkey on an external device.
      </div>
      <br/>
      
      <div>
        <button onClick={PasskeyGet}>Use Passkey</button>
        <br/>
        This will request your browser to sign with the previoulsy created Passkey.
      </div>
      
      <footer>
        <p><a href="https://github.com/kei-eniblock/passkey-demo">github</a></p>
      </footer>
      
    </div>
    
   
    
  );
}

export default App;
