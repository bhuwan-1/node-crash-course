const fs = require('fs');

//reading a file

// fs.readFile('./docs/text.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }

//     console.log(data.toString());
// } );

// console.log('last line');


//writing a file
fs.writeFile('./docs/text2.txt', 'writing a second file', ()=>{
    console.log('new file made and written');
})
