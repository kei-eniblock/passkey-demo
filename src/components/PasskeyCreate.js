const PasskeyCreate = async () => {
  return await navigator.credentials
    .create({
      publicKey: publicKeyCredentialCreationOptions,
    })
    .then((credential) => {
      console.log("New credential created:", credential);
    });
};

const buffer = new ArrayBuffer(8);
const int32View = new Int32Array(buffer);
int32View[0] = 42;

const binaryData = new Uint8Array([65, 66, 67]);

const publicKeyCredentialCreationOptions = {
  // Not used but required
  challenge: int32View,
  
  rp: {
    name: "Example",
    id: "localhost",
  },

  // To be provided by the server
  user: {
    id: binaryData,
    name: "eniblocker",
    displayName: "eniblocker",
  },

  pubKeyCredParams: [
    { alg: -7, type: "public-key" },
    { alg: -257, type: "public-key" },
  ],
  // excludeCredentials: [{
  //   id: "toto3",
  //   type: 'public-key',
  //   transports: ['internal'],
  // }],
  authenticatorSelection: {
    authenticatorAttachment: "platform",
    requireResidentKey: true,
  },
};

export default PasskeyCreate;

