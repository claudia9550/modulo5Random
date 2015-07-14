var fs = require ('fs');

if (process.argv.lenght >= 4)
{	console.log(' teclea node merge ar1 ar2  ar3 ar4 ....');
	process.exit()
}

if fs.readFile('c:\users\Student\Documents\MiriadaX', function (err, data) {
  if (err) throw err; 
  console.log('Archivo invalido')
  }
);

var readStream = fs.createReadStream(process.argv[2]);

var writeStream = fs.createWriteStream(process.argv[3]);

readStream.pipe(writeStream);