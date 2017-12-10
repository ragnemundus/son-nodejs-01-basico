var fs = require('fs');

// fs.writeFile('data.txt', 'Hello world from SON', function(err){
//     if(err){
//         throw err;
//     }
// });

// fs.readFile('data.txt', function(err, data){
//     if (err) {
//         throw err;
//     }

//     console.log(data.toString('utf8'));
// })

// lendo arquivos de um diretório
// fs.readdir('.', function(err, files){
//     if(err){
//         throw err;
//     }

//     for (var file in files){
//         console.log(files[file]);
//     }
// });


// lendo arquivos de um diretório
fs
    .readdirSync('.')
    .filter(function(file) {
        return (file.endsWith('.js'));
    })
    .forEach(function (file) {
        console.log(file);
    });
