const Hello = require('./Hello');
const FileReaderLineByLine = require('./FileReaderLineByLine');
const path = require('path');

// Hello();
// process.exit()

// FileReaderLineByLine('./Hello.js');


// console.log(path.basename('./ashish/amit'));  //ye hame last ka / ke bad ka name nikal ke de raha hai 

// console.log(path.delimiter); // ye plateform ke hisab se delimiter deta window ke liye ; linux ke liye :

// console.log(path.dirname('./ashish/amit/rohan.js')); // ye hame batata hai ki fie kis directory me exist karati hai uska path return karata hai ab exit kare ya na par ye path return karega file ke pahele ka 

// console.log(path.extname('./amit/rohan.js'));//ye file ke exention ko return karata hai jaise isme .js hai to .js return karega 

// let obj = {
//   base: 'amit',      // pura file name (priority sabse upar)
//   dir: 'akit',       // directory path
//   ext: '.js',        // extension (ignored agar base diya hai)
//   name: 'rohit',     // file name without extension (ignored agar base diya hai)
//   root: 'home'       // root (ignored agar dir diya hai)
// }


// console.log(path.format(obj));


// console.log(path.isAbsolute('/home/user/server.js'));//absolute path  true
// console.log(path.isAbsolute('./server.js'));// relative path false


// console.log(path.join('./amit','./rohan','./ankit.js'));// ye path ko join karata hai 


// console.log(path.normalize('../hello/ashish.js')); ye path ko normalize karata hai matlab ye unnecessary .., . aur slashes (/, \\) ko clean kar deta hai

// const parsed = path.parse('./Home/ashish/amit/rohan/ankit.js');
// console.log(parsed , path.format(parsed));   //path string ko object me tod deta hai  same format() ke form me jo format() object accept karata hai o sari properties hoti hai 

// console.log(path.relative('./amit/rohan' , 'ashish.js')); // ye hamase path aur file name leta hai aur file ka relative path return karata hai 


// console.log(path.resolve('./amit', 'rohan.js'));// ye hame absolute path return kar ke deta hia agar ham isme kuchh pass karate hai to uska absolute path deta hai aur ye join bhi karane ka kam karata hai

// console.log(path.sep); ye hame platform-specific path segment  return karata hai window ke liye \ linux ke liye /

















