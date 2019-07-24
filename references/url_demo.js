const Url = require('url');

const myurl = new URL('http:\\www.mywebsite.com:8000/hello.html?id=100&status=active');

//get seriealize url

console.log(myurl.href);
console.log(myurl.toString());
// host {root domain}
console.log(myurl.host);
//doesn't gives port
console.log(myurl.hostname);
//pathname
console.log(myurl.pathname);
//serealize query
console.log(myurl.search);
//params object
console.log(myurl.searchParams);
//addparam
myurl.searchParams.append('abc','123');
console.log(myurl.searchParams);

// loop through params
myurl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));