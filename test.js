var http = require("http");

function onRequest(request, reponse){
response.writeHead(200,{"Content-Tyep"; "text/plain"});
response.write("Hello World");
reponse.end();
}

http.createServer(onRequest),listen(8888);
