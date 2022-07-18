
//longest substring without repetition

var lengthOfLongestSubstring = function (s) {
    // let i = 0
    let right = 0
    let left = 0
    let n = s.length
    let map = {
    }
    let ans = 0
    for (let i = 0; i < n; i++) {
        console.log('at s[i]', s[i], map, right)

        if (map[s[i]] >= left) {

            left = map[s[i]] + 1
            console.log('---left', left)

        }
        
        map[s[i]] = i

        if ((right - left + 1) > ans) {
            console.log('setting ANSWER to ', right - left + 1, right, left)
            ans = right - left + 1

        }
        right += 1

    }

    return ans
};

lengthOfLongestSubstring('abba')