console.log(global.luckyNum); //undefined

global.luckyNum = '23';

console.log(global.luckyNum); //23

//learn how events and callback work

//file system
//const {readFile, readFileSync} = require('fs');

//const txt = readFileSync('./hello.txt', 'utf8'); //SYNC ===BLOCKING 
//console.log(txt);
//can make a code non blocking by refactoring to a call back
//readFile('./hello.txt', 'utf8', (err, txt)=>{
//    console.log(txt) // run second
//});
//console.log("do this asap"); //run first

//promise based 
/*const { readFile }= require('fs').promises;

async function hello()
{
    const file = await readFile('./hello.txt', 'utf8');
    console.log(file)
}

console.log(hello());
*/

