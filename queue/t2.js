

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
// getClientSecret2()
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
// main2(code2)


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
// getClientSecret3()
