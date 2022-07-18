const appleSignin =require('apple-signin-auth') ;
const fs = require('fs')
    
    var clientId = 'com.harkaudio.podcast.applesignin.beta'
    let kid = 'SA6S945KST'
    let team_id = '8Z7DUYBZ6B'
    // let kid = 'FF83KD746B'
    // let bundleID = 'com.harkaudio.podcast.applesignin.beta'
    let appClientId = 'com.harkaudio.podcast.beta'
    let REDIRECT_URI = 'https://beta-api.harkaudio.com/api/v0/auth/apple/redirectresponse'
    var privateKey = fs.readFileSync('AuthKey_SA6S945KST.p8', 'utf8');

async function main(code) {
    var privateKey = fs.readFileSync('AuthKey_SA6S945KST.p8', 'utf8');

    const clientSecret = appleSignin.getClientSecret({
        clientID: clientId, // Apple Client ID
        teamID: team_id, // Apple Developer Team ID.
        privateKey: privateKey, // private key associated with your client ID. -- Or provide a `privateKeyPath` property instead.
        keyIdentifier: kid, // identifier of the private key.
        // OPTIONAL
        expAfter: 15777000, // Unix time in seconds after which to expire the clientSecret JWT. Default is now+5 minutes.
    });
    console.log(clientSecret)
    const options = {
        clientID: clientId, // Apple Client ID
        // redirectUri: 'http://localhost:3000/auth/apple/callback', // use the same value which you passed to authorisation URL.
        redirectUri: REDIRECT_URI, // use the same value which you passed to authorisation URL.
        clientSecret: clientSecret
    };

    try {
        const tokenResponse = await appleSignin.getAuthorizationToken(code, options);
        console.log('tokenResponse',tokenResponse)
    } catch (err) {
        console.error(err);
    }
}
// let code = 'cbce1b7c79eca4b0da02f4c53d98511bd.0.rrsrs.U6LgWWSOcoSrOpj2Gpm_qw'
let code = 'cea01ae1f77b74dcda8d3bf4828da065c.0.rrsrs.oTsHzWG0eEx_qW90XJJe0A'
// main(code)


async function getRefreshToken( refreshToken ){
    const clientSecret = appleSignin.getClientSecret({
        clientID: clientId, // Apple Client ID
        teamID: team_id, // Apple Developer Team ID.
        privateKey: privateKey, // private key associated with your client ID. -- Or provide a `privateKeyPath` property instead.
        keyIdentifier: kid, // identifier of the private key. - can be found here https://developer.apple.com/account/resources/authkeys/list
        // OPTIONAL
        expAfter: 15777000, // Duration after which to expire JWT
      });
      console.log('clientSecret - ',clientSecret)
      const options = {
        clientID: clientId, // Apple Client ID
        clientSecret
      };
      
      try {
        // const {
        //   access_token
        // } = appleSignin.refreshAuthorizationToken(refreshToken, options);
        const res = await appleSignin.refreshAuthorizationToken(refreshToken, options);
        console.log('new access token -> ', res )
      } catch (err) {
        console.error(err);
      }
    
}

// let refreshToken  = 'rda3e3543ba794a26badc5c552fec7eaa.0.rrsrs.R6KQkfUItvywsaKWsPRuhA'
// let refreshToken  = 'a34785dd1e28f4554a8f3d72752b511d1.0.rrsrs.2XU4f8NHySl7e19anOBsuA' // thisia access token returned
let refreshToken  = 'a56e8c70851e54084b2735129ee5f5648.0.rrsrs.VIei11jyTUKBbS5LG7N6RA' //this is a access token returned
// new access token ->  {
//     error: 'invalid_grant',
//     error_description: 'The token has expired or has been revoked.'
//   }
getRefreshToken(refreshToken)

//   tokenResponse {
//     access_token: 'ae0bd6fbe15b74030957f0818142e30e6.0.rrsrs.6p1VBGshEkS3LekDxrBJyg',
//     token_type: 'Bearer',
//     expires_in: 3600,
//     refresh_token: 'rda3e3543ba794a26badc5c552fec7eaa.0.rrsrs.R6KQkfUItvywsaKWsPRuhA',
//     id_token: 'eyJraWQiOiJZdXlYb1kiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmhhcmthdWRpby5wb2RjYXN0LmFwcGxlc2lnbmluLmJldGEiLCJleHAiOjE2NTgxMzIzMzUsImlhdCI6MTY1ODA0NTkzNSwic3ViIjoiMDAxMjEyLjBkNjc4N2UzNjNlZDQ4MjM5ZjIzMTkxODNkY2MyMzNmLjA5MzkiLCJhdF9oYXNoIjoibEhiNDRhb0s0bjRkbUNLNU1NbnFVUSIsImF1dGhfdGltZSI6MTY1ODA0NTgwNSwibm9uY2Vfc3VwcG9ydGVkIjp0cnVlfQ.a46x44JhxydRuWV95H3beEaHlLRMlX2SprSCbftM3ArqLTuQr2MzN_Usnd7ExcT37ad-RB1FeYw3DtdNA11GwyczywlfkaxfJSuMIRdQDvjs4Rue45bmZ0Q-FZPW5GCCk2XuOwDXf6nz81YtUasWMX1OYlBKzacvTeUnRU4wZkMmuTh5u60jOi6Pb-3rmyaJqSQ1UynpBxE9GbdAEhKNDIZTmTI4hZXs1jgHytgBLBcFSe1ghJOA80FeR_sZfL8mDtBharQfL66ujOeLeSOBwI-GVfei7Arwg-u4K9TPKHx_qWrN-1ax19ONQPw6GmS0sHaX84YLVb7jNg5bsxB4Lw'
//   }