// const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');
const jwt = require('jsonwebtoken');
let main  = () =>{
    let options = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60)*24*30,
        data: 'foobar',
        aud: 'https://appleid.apple.com',
      }
//    let token  =  jwt.sign( options , 'secret');


      var token = jwt.sign( options, 'privateKey' , {
                algorithm: 'ES256',
                    header: {
                    alg: 'ES256',
                        kid: 'xxxxxxxxxx'
                }
            });


      console.log('-->  ',token)


}
main()

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
    return buff.toString('utf-8')
}