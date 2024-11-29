function compareVersion(version1, version2) {
    var ver1 = version1.split('.');
    var ver2 = version2.split('.');
    var maxLen = Math.max(ver1.length, ver2.length);
    console.log(maxLen);
    for (var i = 0; i < maxLen; i++) {
        var n1 = parseInt(ver1[i]) || 0;
        var n2 = parseInt(ver2[i]) || 0;
        console.log(ver1[i], ver2[i]);
        if (n1 > n2) {
            return 1;
        }
        else if (n1 < n2) {
            return -1;
        }
    }
    return 0;
}
var version1 = "1.01", version2 = "1.001";
var version3 = "1.2", version4 = "1.10";
// console.log(compareVersion(version1, version2))
console.log(compareVersion(version3, version4));
