/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    dp[s.length] = true

    for (let i = s.length - 1; i > -1; i--) {
        for (let w of wordDict) {
            if(i + w.length <= s.length && s.substring(i, i + w.length) === w) {
                dp[i] = dp[i + w.length]
            }
            if (dp[i]) {
                break
            }
        }
    }

    return dp[0]
};