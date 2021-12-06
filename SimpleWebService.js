var http=require('http')
http.createServer(function(req,res)
{
    res.write("Nilesh.., First web service")
    res.end()
}).listen(8080)