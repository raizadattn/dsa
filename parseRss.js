const Parser = require('rss-parser');
// let url = 'https://audioboom.com/channels/4954758.rss'
// let url = 'https://www.marketplace.org/feed/podcast/make-me-smart'
let url = 'https://apple.news/podcast/after_the_whistle'
const feedURL = url.replace('0X0P 0', ':');
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
    // temporary fire email
    feed.then(async (data) => {
        console.log('data', data)
    })