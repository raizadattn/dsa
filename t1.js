
const fetch = require('node-fetch');
const Parser = require('rss-parser');
// let url = 'https://www.kuow.org/feeds/podcasts/seattlenow/podcasts/rss.xml'
// let url = 'https://feeds.castfire.com/good-karma/wilde_tausch_itunes'
let url = 'https://www.kuow.org/feeds/podcasts/soundside/podcasts/rss.xml'


async function parseRss(url, callback) {
    const ENTITY_DOES_NOT_EXIST = 1;
    console.log("+++++++++URL", url)
    const feedURL = url.replace('0X0P 0', ':');
    // console.log('feedUrl', feedUrl)
    const parser = new Parser({
      // requestOptions: {
      //   rejectUnauthorized: false
      // },
      headers: { 'User-Agent': 'rss-parser' },
      xml2js: {
        ignoreAttrs: false,
        attrKey: '$',
      },
      customFields: {
        feed: ['image', 'itunes:image'],
      },
    });
    const feed = parser.parseURL(feedURL);
    feed.then((data) => {
        console.log('href',data.feedUrl)
    //   const result = processRssResult(data, feedURL);
      callback(null, data);
    }).catch((e) => {
      console.log("error for href 555555", e)
      return callback({ errorCode: ENTITY_DOES_NOT_EXIST, message: url });
    });
  }

  parseRss(url,(err,res)=>{
    console.log('res')
  })