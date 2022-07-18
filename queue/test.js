// const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');
const jwt = require('jsonwebtoken');
const nJwt = require('njwt');
const jwkToPem = require('jwk-to-pem');
const fs = require('fs')
var request = require('request');
// var fetch = require('node-fetch')
const axios = require('axios')
const appleSignin = require('apple-signin')

const jose = require('jose')


var clientId = 'com.harkaudio.podcast.applesignin.beta'
let getClientSecret = () => {
    // var privateKey = fs.readFileSync('jwtRS256.key');
    // var privateKey = fs.readFileSync('pk2.p8');
    // var privateKey = fs.readFileSync('AuthKey_SA6S945KST.p8');
    // console.log('privateKey',privateKey)
    privateKey = fs.readFileSync('AuthKey_SA6S945KST.p8', 'utf8');
    console.log('privateKey2', privateKey)

    // cdsa_key = OpenSSL::PKey::EC.new IO.read key_file
    let kid = 'SA6S945KST'
    // let kid = 'FF83KD746B'
    let bundleID = 'com.harkaudio.podcast.applesignin.beta'
    let options = {
        // iss: 'xxxxxxxxx',
        iss: bundleID,
        iat: Math.floor(Date.now() / 1000),
        aud: 'https://appleid.apple.com',
        sub: bundleID,
        exp: Math.floor(Date.now() / 1000) + (60 * 60) * 24 * 30,
        data: 'foobar',
    }
    // var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});

    const jwtOptions = {
        // expiresIn: 300,      // 300 seconds
        algorithm: 'ES256',  // only necessary if you want a different value than 'HS256' 
        //notimestamp: true, // don't added timestamp iat (issued at)
        header: {
            kid: kid
        }
    }

    // var token = jwt.sign(options, privateKey, { algorithm: 'ES256' , kid:'SA6S945KST' });
    var token = jwt.sign(options, privateKey, jwtOptions);

    let secret = 'privateKey'
    // let secretPem = jwkToPem(secret)
    // var token = jwt.sign(options, secret, {
    //     algorithm: 'RS256',
    //     header: {
    //         alg: 'RS256',
    //         kid: 'xxxxxxxxxx'
    //     }
    // });


    console.log('-->  ', token)
    return token


}
// function main(){
//     let email  = 'abhi.raizada21@gmail.com'
//     // const token = jwt.sign(
//     //     { user_id: 123, email },
//     //     'secret',
//     //     {
//     //       expiresIn: "2h",
//     //       algorithm: 'HS256'
//     //     //   algorithm: 'ES256'
//     //     }
//     //   );
//     //   console.log(token)
//       let claims = { user_id: 123, email }
//       var jwt = nJwt.create(claims,'signingKey','RS256');
//       console.log('jwt--',jwt, jwt.compact())


// }
// getClientSecret()

// function getClientSecret() {
//     jwt.sign()
//     jwt.sign({
//         iss: 'xxxxxxxxx',
//         iat: Math.floor(Date.now() / 1000),
//         exp: Math.floor(Date.now() / 1000) + 360000,
//         aud: 'https://appleid.apple.com',
//         sub: bundleID
//     }, 
//     @privateKey,
//     {
//         algorithm: 'ES256',
//             header: {
//             alg: 'ES256',
//                 kid: 'xxxxxxxxxx'
//         }
//     });
// }

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
    let decodedCode = code
    let secret = getClientSecret()
    let body = {
        code: decodedCode,
        client_id: 'com.harkaudio.podcast.applesignin.beta',
        client_secret: secret,
        grant_type: 'authorization_code'

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

        let res = await axios.post(url, body);
        let data = res.data;
        console.log('data--', data);

    } catch (error) {
        console.log('err-->', error.response)
    }


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

let code = 'c06daded2db2b4c1598869093300436e7.0.rrsrs.Bb_nGmhA7jeQ7ZDvLMVMgg'
// hit(code)


const clientSecret = appleSignin.getClientSecret({
    clientID: "com.harkaudio.podcast.applesignin.beta", // identifier of Apple Service ID.
    teamId: "teamId", // Apple Developer Team ID.
    privateKeyPath: "/home/abhimanyu/Raizada/DSA/queue/AuthKey_SA6S945KST.p8", // path to private key associated with your client ID.
    keyIdentifier: "SA6S945KST" // identifier of the private key.    
});
console.log('clientSecret', clientSecret)



async function getClientSecret2() {
    const path = require('path');
    //Authkey? Xhgxcp8b9s.p8 file downloaded by Apple Developer account configuration
    const PRIVATEKEY = fs.readFileSync(path.join(__dirname, './AuthKey_SA6S945KST.p8'), { encoding: 'utf-8' });
    const TEARM_ID = 'K5nknskG8';
    const CLIENT_ID = 'com.baidu.abc.signInWithApple';
    const KEY_ID = 'SA6S945KST';
    const headers = {
        alg: 'ES256',
        kid: KEY_ID
    };
    const timeNow = Math.floor(Date.now() / 1000);
    const claims = {
        iss: TEARM_ID,
        aud: 'https://appleid.apple.com',
        sub: clientId,
        iat: timeNow,
        exp: timeNow + 15777000
    };

    const token = jwt.sign(claims, PRIVATEKEY, {
        algorithm: 'ES256',
        header: headers
        // expiresIn: '24h'
    });
    console.log('token2  ', token)
    return token;
}
getClientSecret2()
async function main2(code) {
    console.log('-------------------main2')
    let secret = await getClientSecret2()
    console.log('getClientSecret2()', secret)
    let REDIRECT_URI = 'https://beta-api.harkaudio.com/api/v0/auth/apple/redirectresponse'
    const params = {
        grant_type: 'authorization_code', // refresh_token authorization_code
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: clientId,
        client_secret: secret
        // refresh_token:body.id_token
    };
    try {
        const token = await axios.request({
            method: 'POST',
            url: 'https://appleid.apple.com/auth/token',
            // data: qs.stringify(params),
            // data: JSON.stringify(params),
            data: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        console.log('res token ', token.data)
    } catch (error) {
        console.log('error', error.response)
    }

}

let code2 = 'ce50ebe1c71c2490e8c4e51df1fa60674.0.rrsrs.0WBaTYzbEIqxRhwoqtYOvg'
main2(code2)


const getClientSecret3 = () => {
    // sign with RSA SHA256
    const privateKey = fs.readFileSync('AuthKey_SA6S945KST.p8');
    const headers = {
        kid: 'SA6S945KST',
        typ: undefined // is there another way to remove type?
    }
    const claims = {
        'iss': process.env.TEAM_ID,
        'aud': 'https://appleid.apple.com',
        'sub': process.env.CLIENT_ID,
    }
    let token = jwt.sign(claims, privateKey, {
        algorithm: 'ES256',
        header: headers,
        expiresIn: '24h'
    });
    console.log('token3  --  ', token)
    return token
}
getClientSecret3()

// /home/abhimanyu/Raizada/DSA/queue/AuthKey_SA6S945KST.p8
// let revokeToken = () => {
//         client_secret = @getClientSecret()

// data = {
//     'token': token,
//     'client_id': bundleID,
//     'client_secret': client_secret,
//     'token_type_hint': 'access_token'
// };

// body = qs.stringify(data)

// opts =
//     protocol: 'https:'
// host: 'appleid.apple.com'
// path: '/auth/revoke'
// method: 'POST'
// timeout: 6000
// headers:
// 'Content-Type': 'application/x-www-form-urlencoded'
// 'Content-Length': Buffer.byteLength(body)

// http.post(body, opts)}

var util = require('util');
var encoder = new util.TextEncoder('utf-8');
const { createSecretKey } = require('crypto');
async function yes() {
    // const { TextEncoder, TextDecoder } = require("util");
    let privateKey = fs.readFileSync('AuthKey_SA6S945KST.p8');
    const algorithm = 'ES256'
//     const pkcs8 = `-----BEGIN PRIVATE KEY-----
// MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgiyvo0X+VQ0yIrOaN
// nlrnUclopnvuuMfoc8HHly3505OhRANCAAQWUcdZ8uTSAsFuwtNy4KtsKqgeqYxg
// l6kwL5D4N3pEGYGIDjV69Sw0zAt43480WqJv7HCL0mQnyqFmSrxj8jMa
// -----END PRIVATE KEY-----`

    const secretKey = createSecretKey( privateKey, 'utf-8');
    console.log('secretKey',secretKey)
    const timeNow = Math.floor(Date.now() / 1000);
    const claims = {
        iss: clientId,
        aud: 'https://appleid.apple.com',
        sub: clientId,
        iat: timeNow,
        exp: timeNow + 15777000
    };
    const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
        .setProtectedHeader({ alg: 'ES256' })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('2h')
        .sign(secretKey)

    console.log('jwt - ', jwt)
}

// yes()