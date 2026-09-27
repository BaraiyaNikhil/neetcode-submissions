class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const scount = {};
        const tcount = {};
        for (const c of s) {
            if (scount[c]) scount[c] += 1;
            else scount[c] = 1;
        }
        for (const c of t) {
            if (tcount[c]) tcount[c] += 1;
            else tcount[c] = 1;
        }
        for (const key in scount) {
            if (!tcount[key] || scount[key] !== tcount[key]) return false;
        }
        return true;
    }
}
