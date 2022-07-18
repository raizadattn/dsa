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

let refreshToken  = 'ree23dfd5c02e4608a38f458860fe30c8.0.rrsrs.6jugeG48h0Tmw4XIoJB7Rg'
//got on this refresh token on sun
// clientSecret -  eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlNBNlM5NDVLU1QifQ.eyJpc3MiOiI4WjdEVVlCWjZCIiwiaWF0IjoxNjU4MDYwOTk0LCJleHAiOjE2NzM4Mzc5OTQsImF1ZCI6Imh0dHBzOi8vYXBwbGVpZC5hcHBsZS5jb20iLCJzdWIiOiJjb20uaGFya2F1ZGlvLnBvZGNhc3QuYXBwbGVzaWduaW4uYmV0YSJ9.uXm7Vfwur4j_DubQ0lLsZuDl0YEcobQkvZ636IRbf4T1uwGMSiOKWnp0jE7JQVNgkKwNekCRF1qASzAdSHAJVQ
// new access token ->  {
//   access_token: 'a88271482a27b4d28ad602d01d2417fa5.0.rrsrs.AEpan_Raui1Z3atz0wvxoQ',
//   token_type: 'Bearer',
//   expires_in: 3600,
//   id_token: 'eyJraWQiOiJZdXlYb1kiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmhhcmthdWRpby5wb2RjYXN0LmFwcGxlc2lnbmluLmJldGEiLCJleHAiOjE2NTgxNDczOTUsImlhdCI6MTY1ODA2MDk5NSwic3ViIjoiMDAxMjEyLjBkNjc4N2UzNjNlZDQ4MjM5ZjIzMTkxODNkY2MyMzNmLjA5MzkiLCJhdF9oYXNoIjoidE51MzhmUjR4UjN6MUtoVHdQanQtZyJ9.Z_0qRaFi2tCXtfvPjnV2LSVLCO97KyinJkgmW0kvq8XhYL93KzmJxJIqHk_aTHEZXFEVZZxorMLtmPt5o796rbxS7ZU48JL9c7V4feQZjlRKN6euwcnsktlpdL02KmQL2oU66gvdgYWY5xooPlQptR97o8RcBUcSH2hDWoItU-4WCo2lVVr2WI0VYV84Pglpw1ITS_8koEDxTLXxqZZagZXMYb4Ts_22pwjyuKiJAevjpAVj7vpPV4HqP7MZkqNphGG6D5C41vsi1AaOCLw-h6UmpJmEfhJBt60jU1WJjqyXcjkaAPjAyZSjhPW70cIWphLC5mpjNiAGwt_V_lsKIg'
// }

// let refreshToken  = 'afbf1b7473ae84abf8405ff975ddc5045.0.rrsrs.SkToAGU60OjdFnkOMibLXw' //this is a access token returned
//got invalid with this one

// new access token ->  {
//     error: 'invalid_grant',
//     error_description: 'The token has expired or has been revoked.'
//   }

// new access token ->  {
//     error: 'invalid_grant',
//     error_description: 'The token has expired or has been revoked.'
//   }
getRefreshToken(refreshToken)

//first refresh token ever
// eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlNBNlM5NDVLU1QifQ.eyJpc3MiOiI4WjdEVVlCWjZCIiwiaWF0IjoxNjU3ODgwNTMwLCJleHAiOjE2NzM2NTc1MzAsImF1ZCI6Imh0dHBzOi8vYXBwbGVpZC5hcHBsZS5jb20iLCJzdWIiOiJjb20uaGFya2F1ZGlvLnBvZGNhc3QuYXBwbGVzaWduaW4uYmV0YSJ9.-3xIiXXKm5KGR5B3xTc_tRXx_5HNU0Nc3MHIkYvImp67unqS79i-EG6ASA2kx8_h0MNswSwa2ztGMMK9o0odpg
// tokenResponse {
//   access_token: 'afbf1b7473ae84abf8405ff975ddc5045.0.rrsrs.SkToAGU60OjdFnkOMibLXw',
//   token_type: 'Bearer',
//   expires_in: 3600,
//   refresh_token: 'ree23dfd5c02e4608a38f458860fe30c8.0.rrsrs.6jugeG48h0Tmw4XIoJB7Rg',
//   id_token: 'eyJraWQiOiJXNldjT0tCIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmhhcmthdWRpby5wb2RjYXN0LmFwcGxlc2lnbmluLmJldGEiLCJleHAiOjE2NTc5NjY5MzIsImlhdCI6MTY1Nzg4MDUzMiwic3ViIjoiMDAxMjEyLjBkNjc4N2UzNjNlZDQ4MjM5ZjIzMTkxODNkY2MyMzNmLjA5MzkiLCJhdF9oYXNoIjoieDlId1p5WVh5UENVd0lzQTduNXVMUSIsImF1dGhfdGltZSI6MTY1Nzg4MDQ4NSwibm9uY2Vfc3VwcG9ydGVkIjp0cnVlfQ.Lbyo_mUVUNorTANeS0SlumICEtsSdHFhZdVsAlNFC3MXIy7C6tMYWT1YLTkTw1VzgS4aTIoKC5kMckHCRi7rDwNhtAi_4Zsxa5qjVlkXTF06wQT2-WmM9M0a8W4TeDjZ-RpW4xwvldjSuIkoJkQwZGY2n8YhWsrT242rEtnOf29QEMhka05ySfeB7r4jwF4tMx-PiRgZgQnZqtywIuMq67uX-qz88H3pAWemudMQUt5esvQiWhJseW0iv5CqCcmLWifzCSkX5suVDtl0A9Y-lPi4G42HPtzKQ7beIwInNeSKW8rHE-xuojpawHGE1ld6AR0zcdzDlBTsXWY5Hunt1A'
// }