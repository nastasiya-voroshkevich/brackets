module.exports = function check(str, bracketsConfig) {

if (str.length % 2 !== 0) 
    return false;


let prevStr ;
while (prevStr !== str) {
    prevStr = str;
    for(const brackets of bracketsConfig) {
        str = str.replace(brackets.join(''), '');
    }
} 

return str.length === 0;


}
