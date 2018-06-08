let dsc = function(sa1, sa2){
    // Compare two strings to see how similar they are.
    // Answer is returned as a value from 0 - 1
    // 1 indicates a perfect similarity (100%) while 0 indicates no similarity (0%)
    // The algorithm is an n-gram comparison of bigrams of characters in a string

    // Comparison should not check case or whitespace
    let s1 = sa1.replace(/\s/g, "").toLowerCase();
    let s2 = sa2.replace(/\s/g, "").toLowerCase();
       
    const similarity_num = 2 * intersect(pairs(s1), pairs(s2)).length;
    const similarity_den = pairs(s1).length + pairs(s2).length;
    return similarity_num / similarity_den;
};

// private functions ---------------------------
function intersect(arr1, arr2) {
    let r = [], o = {}, l = arr2.length, i, v;
    for (i = 0; i < l; i++) {
        o[arr2[i]] = true;
    }
    l = arr1.length;
    for (i = 0; i < l; i++) {
        v = arr1[i];
        if (v in o) {
            r.push(v);
        }
    }
    return r;
}

// private functions ---------------------------
let pairs = function(s){
    // Get an array of all pairs of adjacent letters in a string
    let pairs = [];
    for(let i = 0; i < s.length - 1; i++){
        pairs[i] = s.slice(i, i+2);
    }
    return pairs;
}


exports.dsc = dsc;
