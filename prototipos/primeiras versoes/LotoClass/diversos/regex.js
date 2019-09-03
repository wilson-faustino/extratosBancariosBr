
// i == case insensitive
// g == global search
// ^ == starts with (ex. /^h/i). começa com h
// $ == ends with (ex. /d$/i). termina com d

// ex. /^Hello$/i --começa e termina com Hello

// . == Matches any ONE character
// * == Matches any character. 0 or more

// exec() - Returns result in an array or null
// test() - Returns true or false
// match() - Returns result array or null (inverso do exec())
// search() - Returns index of the first match. If not found returns -1
// replace() - Return new string with some or all of matches of a pattern

const log = console.log;
let re;
re = /hello/i;
let str = 'Hello World';

function reTest(re, str) {
   if (re.test(str)) {
      log(`${str} matches ${re.source}`);
   } else {
      log(`${str} does not match ${re.source}`);
   }
}

reTest(re, str);
