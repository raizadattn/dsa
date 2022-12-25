const Parser = require('rss-parser');
// let url = 'https://www.wnycstudios.org/feeds/series/podcasts'
// let url = 'http://feeds.wnyc.org/radiolab'
// let url = 'http://www.kuow.org/feeds/podcasts/seattlenow/podcasts/rss.xml'
let url = 'https://www.kuow.org/feeds/podcasts/seattlenow/podcasts/rss.xml'
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
async function parseRss(){
    const feed = await parser.parseURL(feedURL);
    console.log('feed', feed.items.length)
    console.log('link', feed.link)
    console.log('href', feed.feedUrl)
    // console.log('feed', feed.items)
}
parseRss()