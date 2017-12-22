const express = require('express');
const XLSX = require('xlsx');
const json2xls = require('json2xls');
const fs = require('fs.extra');
const http = require('http');

const app = express();

//including the modules
const matrix = require('./modules/matrix/matrix');

app.use('/matrix', matrix);
const port = 3000;

// engine setup

// const options = {
//     hostname: 'SRV-ELO01',
//     port: 9090,
//     path: '/ix-CDC/ix?cmd=readdoc1&encrobjid=%23%23AES%23%23rdZcnKYNAgWNKCb7dUo0m8t9Sj4ntOJMOOlehjooqlm41HuKrpkgRAc0BndF5RRapa2g%2Bsd%2FX6CiUQeherIedZgucGak4dfPAMd31UbYDR8%3D&acode=attachment&fname=trucks+contracts+matrix++mail+merge+source++current.xlsm',
//     method: 'GET',
//     headers:{
//         'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
//     }
// }

app.set('view engine', 'ejs');
//static elements folder
app.use('/public', express.static(__dirname + '/public/'));
app.set('views', __dirname + '/views/');

//angular material
app.use('/angular-material', express.static(__dirname + '/node_modules/angular-material/'));
app.use('/scripts',  express.static(__dirname + '/node_modules/'));

// app.get('/', (req, res) => {
//     res.render(index.html) 
// })

// app.get('/getMatrix', (req,res) =>{
//     const matrixReq = http.request(options, (res) =>{
//         console.log(`STATUS: ${res.statusCode}`);
//         console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//         res.setEncoding('base64');
//         let data='';
//         res.on('data', (chunk) => {
//             data+=chunk;
//           });
//           res.on('end', () => {
//             console.log(data);
//             fs.writeFileSync('data2.xlsm', data, 'base64');
//             console.log('No more data in response.');
//           });
    
//     });
    
//     matrixReq.end();
//     res.send('matrix downloaded')
// })


// app.get('/report', (req, res) => {

//     const workbook = XLSX.readFile('data2.xlsm');
//     const sheet_name_list = workbook.SheetNames;
//     let xlData = XLSX.utils.sheet_to_json(workbook.Sheets["Tabelle1"]);

//     let newAssignors = xlData.filter(assignor => {
//         if ( assignor.hasOwnProperty('company_name') && assignor.hasOwnProperty('signdate_CDC_DoT') && assignor.hasOwnProperty('signdate_assig_DoT') && !assignor.signdate_CDC_DoT.includes('still open') ) {
//           if ( assignor.hasOwnProperty('Assig_included_in_writ') ){
//                 if (!assignor.Assig_included_in_writ.toUpperCase().includes('YES')){
//                     return assignor;
//                 }
//             } else {
//                 return assignor;
//             }     
            
//         }
//     });

//     res.send(newAssignors); 
// })

// app.get('/table', (req,res) => {
//     res.render('table');
// })

app.listen(3000, () =>{
    console.log(`the server is running in the port ${port}`)
})