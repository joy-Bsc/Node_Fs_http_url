const { error } = require('console');
const fs = require('fs');
const http = require('http');
const url = require('url');


const server = http.createServer((req,res)=>{

    const urlObject = url.parse(req.url,true);
    const fileName = `${__dirname}/${urlObject.pathname}`;

    fs.readFile(fileName,(error,data)=>{

          if(error){
            res.writeHead(404,{
                'Content-Type':'text/html'
            })
           return res.end(`<h1>404 page not found</h1>`)
          }

        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        res.write(data);
        res.end();
    })
    
});
server.listen(8000,()=>{
    console.log(`server is listening at port 8000`)

})