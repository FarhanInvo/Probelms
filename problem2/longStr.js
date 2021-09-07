function findLongestSubstring(str)
{
    var i;
    var n = str.length;
    var begin = 0;
    var currlen;
    var maxlen = 0;
    var start;
    var pos = new Map();
    pos.set(str[0], 0);
    for (var i = 1; i < n; i++){
        if (!pos.has(str[i]))
            pos.set(str[i],i) ;
 
        else {
            if (pos.get(str[i]) >= begin){
                currlen = i - begin;
                if (maxlen < currlen){
                    maxlen = currlen;
                    start = begin;
                }
                begin = pos.get(str[i]) + 1;
            }
            pos.set(str[i], i);
        }
    }
    if (maxlen < i - begin){
        maxlen = i - begin;
        start = begin;
    }
    return str.substr(start,maxlen);
}
console.log(findLongestSubstring("farhankhan"));