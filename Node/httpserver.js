const http=require('http');
const server=http.createServer((req,res)=>{
     const url =req.url;
     res.setHeader()
     if(url=="/home" && req.method=="GET"){
        res.statusCode=200;
        res.write("Jello");
        
     }
     res.write("H! fdkdn");
     res.write("HUtl");
     res.statusCode=200;
     res.end();
});

server.listen(9999,()=>{
    console.log(" server running on port 9990");
})