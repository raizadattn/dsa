let options = {
    qs: 'rai man'
}
let query = {}

if (options.qs) {
    let st = options.qs.trim();
    console.log('st',st,'-')
    if (st == '?') {
      st = /\?/
    } else {
      st = new RegExp(st, 'i')
    }
    query.title = { $regex: st };
    console.log('qs',options.qs,'-')
    console.log('query',query)
  }

