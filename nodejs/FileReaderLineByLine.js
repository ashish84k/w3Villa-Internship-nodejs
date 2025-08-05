const fs = require('fs');
const readline = require('readline');


function FileReaderLineByLine(path){
    const ReaderStream = fs.createReadStream(path);
    
    const line = readline.createInterface({
        input:ReaderStream,
        crlfDelay:Infinity,
    });
    
    line.on('line' , (line)=>{
        console.log(line );
    });

    line.on('close',()=>{
        console.log("close file");
        
    })
    
}

module.exports = FileReaderLineByLine;