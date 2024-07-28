/*
* This problem was learned from NeetCode channel. Link to the video: https://youtu.be/Ua0GhsJSlWM
* */

export function longestCommonSubSequence(text1, text2) {
    /*
        It's a two dimension dp problem, so let us start from generating the matrix for solution
    */
    const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));
    /*
        Now we will iterate through the matrix and fill the values. Remember, that this is a Bottom-up dp problem,
        so we should start from the bottom to solve subproblems and collect the result of the problem from the bottom to top
    */
    for (let i = text1.length - 1; i > -1; i--) {
        for( let j = text2.length - 1; j > -1; j--) {
            /*
                So basically this is the base case or the sub problem of our dp problem. If the characters are same then we will add 1 to the diagonal value
            */
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
            /*
                If the characters are not same then we will take the maximum of the left and the top value
            */
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    /*
        Finally, we will return the top left value of the matrix which is the result of our dp problem
        Big O of this solution is O(n*m) where n is the length of text1 and m is the length of text2
     */
    return dp[0][0];
}