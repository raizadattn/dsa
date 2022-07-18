const request = require('request')
function test(){
    return new Promise(async (resolve, reject) => {
        request({
          url: 'https://hark-audio-stage.s3.us-east-2.amazonaws.com/outro_playlists/common_outro.mp3',
          encoding: null
        }, async function (err, res, body) {
            console.log(err,res,body)
          if (err) {
            reject(err);
          }
        //   const objectParams = {
        //     // ContentType: res.headers['content-type'],
        //     // ContentLength: res.headers['content-length'],
            
        //     Key: destPath,
        //     Body: body,
        //     Bucket: config.for.s3bucket, //"dev.podcast.milq.com"
        //     ACL: 'public-read',
        //   };
        //   let a = s3.putObject(objectParams, (err, data) => {
        //     console.log("Aws Response Error", err)
        //   })
          resolve(body);
        });
      });
}

test()