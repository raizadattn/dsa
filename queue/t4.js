const {AppleSignIn} = require("apple-sign-in-rest");
const fs = require('fs')

let privateKey = fs.readFileSync('AuthKey_SA6S945KST.p8', 'utf8');
console.log('privateKey2', privateKey)

// cdsa_key = OpenSSL::PKey::EC.new IO.read key_file
let kid = 'SA6S945KST'
let team_id = '8Z7DUYBZ6B'
// let kid = 'FF83KD746B'
// let bundleID = 'com.harkaudio.podcast.applesignin.beta'
let bundleID = 'com.harkaudio.podcast.beta'
let options = {
    iss: team_id,
    iat: Math.floor(Date.now() / 1000),
    aud: 'https://appleid.apple.com',
    sub: bundleID,
    exp: Math.floor(Date.now() / 1000) + (60 * 60) * 24 * 30,
    // data: 'foobar',
}
    /**
     * The clientId depends on that login "flow" you trying to create:
     *   - "web login" - this is the "serviceId"
     *   - "ios login" - this is the app "bundleId", choose only this if you trying to
     *                   verify user that has signed into using the native iOS way
     *
     */
const appleSignIn = new AppleSignIn({

    clientId: bundleID,
    teamId: team_id,
    keyIdentifier: kid,
    privateKey: privateKey
  })
  console.log('appleSignIn',appleSignIn)

  const clientSecret = appleSignIn.createClientSecret({
    /**
     * Optionaly you can set the validity duration of the secret in seconds. Apple allows the secret to up to 6 months,
     * but if you are creating a clientSecret per request basis you can set your own expiration duration.
     * Defaults to 6 months.
     */
    expirationDuration: 5 * 60, // 5 minutes
  });
  console.log('clientSecret',clientSecret)
  const authorizationUrl = appleSignIn.getAuthorizationUrl({
    scope: ["name", "email"],
    redirectUri: "http://localhost:3000/auth/apple/callback",
    // (Optional) Value of the anti-forgery unique session token, as well as any other information needed to recover the context when the user returns to your application, e.g., the starting URL.
    state: "123",
    // (Optional) A random value generated by your app that enables replay protection when present.
    nonce: "insert-generated-uuid",
  });
  console.log('authorizationUrl',authorizationUrl)

      // or instead of privateKey use privateKeyPath to read key from file
    // privateKeyPath: 'queue/AuthKey_SA6S945KST.p8'