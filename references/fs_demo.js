const fs = require('fs');
const path = require('path');

//Create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, err => {
 //   if (err) throw err;
 //   console.log('Folder created...')
//});

//create and write to file
//fs.writeFile(path.join(__dirname, '/test', 'Hello.txt'), 'Hello world!', err => {
 //   if (err) throw err;
 //   console.log('File written to...');
//
//    fs.appendFile(path.join(__dirname, '/test', 'Hello.txt'), 
//    'i love node js', 
//        err => {
//          if (err) throw err;
//             console.log('File written to...')
//});
//});

//read file
// fs.readFile(path.join(__dirname, '/test', 'Hello.txt'), 'utf8', (err,data) => {
//       if (err) throw err;
//       console.log(data);
// });

//rename file
fs.rename(path.join(__dirname, '/test', 'Hello.txt'), path.join(__dirname, '/test', 'Helloworld.txt'), err => {
    if (err) throw err;
    console.log('File renamed');
});


