// let feedUrl = 'https://feeds.castfire.com/good-karma/wilde_tausch_itunes'
let feedUrl = 'https://feeds.castfire.com/good-karma/wilde_tausch_itunes?start=51'


// let feedUrl = "https://www.kuow.org/feeds/podcasts/soundside/podcasts/rss.xml"
let data = {}
// data.href = 'https://feeds.castfire.com/good-karma/wilde_tausch_itunes?start=51'
data.href = 'https://feeds.castfire.com/good-karma/wilde_tausch_itunes?start=101'

let skip = false
let newhref = data.href
let oldhref = feedUrl
const BLOCKED_PODCAST = [
    "http://stevesipress.audello.com/podcast/3/",
    "https://podnews.net/rss",
    "https://www.democracynow.org/podcast.xml",
    "https://www.kuow.org/feeds/podcasts/soundside/podcasts/rss.xml",
    "https://www.kuow.org/feeds/podcasts/seattlenow/podcasts/rss.xml",
    "https://www.kuow.org/feeds/podcasts/the-record/podcasts/rss.xml",
    "https://www.democracynow.org/podcast-video.xml",
    "https://www.kuow.org/feeds/podcasts/thewild/podcasts/rss.xml",
    "https://www.ivoox.com/podcast-one-shot-comics_fg_f1660193_filtro_1.xml",
    "https://rss.dw.com/xml/DKpodcast_lgn_de",
    "https://feeds.castfire.com/good-karma/wilde_tausch_itunes"
]
if (oldhref != newhref && (oldhref.replace("https", "http") == (newhref.replace("https", "http")))) {
    // console.log(oldhref.replace("https", "http")  )
    // console.log(newhref.replace("https", "http"))

    skip = true
}
// if( BLOCKED_PODCAST.indexOf( oldhref ) !== -1 ){
// console.log('2')

//   skip = true
// }
if (oldhref != newhref && oldhref.toLowerCase() == newhref.toLowerCase()) {
    skip = true
}
for (let url of BLOCKED_PODCAST) {
    if (feedUrl.includes(url)) {
        skip = true
        // console.log('yes')
        break
    }

}

console.log('!skip', !skip)
if ((feedUrl !== data.href || newPodcastSlug !== podcastSlug) && !skip) {
    console.log('inside')
} else {
    console.log('outside')
}