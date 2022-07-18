// const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');
const jwt = require('jsonwebtoken');
// const nJwt = require('njwt');
// const jwkToPem = require('jwk-to-pem');
const fs = require('fs')
// var request = require('request');
// var fetch = require('node-fetch')
const axios = require('axios')
const appleSignin = require('apple-signin')

// const jose = require('jose')


var clientId = 'com.harkaudio.podcast.applesignin.beta'
let getClientSecret = () => {
    // var privateKey = fs.readFileSync('jwtRS256.key');
    // var privateKey = fs.readFileSync('pk2.p8');
    // var privateKey = fs.readFileSync('AuthKey_SA6S945KST.p8');
    // console.log('privateKey',privateKey)
    privateKey = fs.readFileSync('AuthKey_SA6S945KST.p8', 'utf8');
    // console.log('privateKey2', privateKey)

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
    // var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});

    const jwtOptions = {
        // expiresIn: 300,      // 300 seconds
        algorithm: 'ES256',  // only necessary if you want a different value than 'HS256' 
        //notimestamp: true, // don't added timestamp iat (issued at)
        header: {
            kid: kid,
            typ: undefined
        }
    }

    var token = jwt.sign(options, privateKey, jwtOptions);
    console.log('-->  ', token)
    return token


}

let decodeBase64 = (base64Data) => {
    buff = Buffer.from(base64Data, 'base64')
    console.log(buff, buff.toString('utf-8'))
    return buff.toString('utf-8')
}
// let code = decodeBase64('ce428d9b22ae94566bfc5f8c8db605f9d.0.rrsrs.plUmmLn4qccYRiIhMvAu0w')
// console.log(code)

let encode64 = (data) => {
    var b = Buffer.from(data)
    var s = b.toString('base64')
    console.log('encoded', data, '-- to --', s)
}
// encode64('java')
// decodeBase64('amF2YQ==')

async function hit(code) {
    // 'code': code,
    // 'client_id': bundleID,
    // 'client_secret': client_secret,
    // 'grant_type': 'authorization_code'
    // let decodedCode = decodeBase64(code)

    // client_id: 'com.harkaudio.podcast.applesignin.beta',

    // let bundleID = 'com.harkaudio.podcast.applesignin.beta'
    let bundleID = 'com.harkaudio.podcast.beta'
    let REDIRECT_URI = 'https://beta-api.harkaudio.com/api/v0/auth/apple/redirectresponse'

    let decodedCode = code
    let secret = getClientSecret()
    let body = {
        client_id: bundleID,
        code: decodedCode,
        client_secret: secret,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI

    }
    let url = "https://appleid.apple.com/auth/token"
    let config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }


    // let payload = { name: 'John Doe', occupation: 'gardener' };
    // application/x-www-form-urlencoded

    try {

        let res = await axios.post(url, body, config);
        // let res = await axios.post(url, querystring.stringify(body), config);
        let data = res.data;
        console.log('data--', data);

    } catch (error) {
        console.log('err-->', error.response.data)
    }

    // try {
    //     let REDIRECT_URI = 'https://beta-api.harkaudio.com/api/v0/auth/apple/redirectresponse'
    //     const params = {
    //         grant_type: 'authorization_code',
    //         code: decodedCode,
    //         redirect_uri: REDIRECT_URI,
    //         client_id: bundleID,
    //         client_secret: secret
    //         // refresh_token:body.id_token
    //     };
    //     const token = await axios.request({
    //         method: 'POST',
    //         url: 'https://appleid.apple.com/auth/token',
    //         // data: JSON.stringify(params),
    //         data: params,
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //     });
    //     console.log('data--', token);

    // } catch (error) {
    //     console.log('err-->', error.response.data)

    // }


    // const response = await fetch( url , {
    //     method: 'post',
    //     body: JSON.stringify(body),
    //     headers: { 'Content-Type': 'application/json' }
    // });
    // const data = await response.json();
    // console.log('data',data)


    // fetch(url, options)
    // .then(res => res.json())
    // .then(result => (console.log('results',result))
    // .catch(err=> console.log('err',err) ))
    // request.post({
    //     url: "https://appleid.apple.com/auth/token",
    //     json: options,
    //     encoding: null
    //   }, async function (err, res, body) {
    //     console.log('err, res, body',err, res, body)
    //     if (err || !body || (!res || res && res.statusCode != 200)) {
    //       // console.log("Error", err);
    //       console.log('err',err)
    //     //   return callback({ errorCode: 400, errorMessage: err.toString() });
    //     } else {
    //         console.log('res',res)
    //         console.log('body',body)
    //     //   callback(null, { "message": "Done", "status": 1 })
    //     }
    //   })
}

let code = 'c2182483a2073473ca41a0dd24a1dc1e4.0.rrsrs.0vM8b9x5YW5aFdL1HOtOVw'
hit(code)


// const clientSecret = appleSignin.getClientSecret({
//     clientID: "com.harkaudio.podcast.applesignin.beta", // identifier of Apple Service ID.
//     teamId: "teamId", // Apple Developer Team ID.
//     privateKeyPath: "/home/abhimanyu/Raizada/DSA/queue/AuthKey_SA6S945KST.p8", // path to private key associated with your client ID.
//     keyIdentifier: "SA6S945KST" // identifier of the private key.    
// });
// console.log('clientSecret', clientSecret)

