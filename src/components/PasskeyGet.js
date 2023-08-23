const abortController = new AbortController();

const buffer = new ArrayBuffer(8);
const int32View = new Int32Array(buffer);
int32View[0] = 42;

const publicKeyCredentialRequestOptions = {  
  // Server generated challenge  
  challenge: int32View,  
  // The same RP ID as used during registration  
  rpId: 'localhost',  
};

const PasskeyGet = async () => {
  return await navigator.credentials
    .get({  
      publicKey: publicKeyCredentialRequestOptions,  
      signal: abortController.signal
    }).then((credential) => {
        console.log("Credential retrieved:", credential);
    });  
};

export default PasskeyGet;