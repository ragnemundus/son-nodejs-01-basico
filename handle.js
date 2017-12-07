function handle(request, response){
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write('<!DOCTYPE "html">');
    response.write('<html>');
    response.write('<head><title>Http module</title></head>');
    response.write('<body>');
    response.write('<h1>Hello from http module SON</h1>');
    response.write('</body>');
    response.write('</html>');

    response.end();
}

module.exports = handle;