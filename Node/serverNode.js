const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const data = [
      {
        id: 1,
        name: "Ashish",
        email: "amldmalwda@gmail.com",
      },
      {
        id: 1,
        name: "Ashish",
        email: "amldmalwda@gmail.com",
      },
      ,
      {
        id: 1,
        name: "Ashish",
        email: "amldmalwda@gmail.com",
      },
    ];
    if(url=='/users' && req.method=="GET"){
    res.writeHead(200,"content-type:application/json");
    res.write(JSON.stringify(data))}
    else{
        res.write("Error")
    }
    res.end()
})
server.listen(3000,(err)=>{
    try{
        if(err) throw err;
        console.log("Server Started")
    }
    catch(err){
        console.log("error message",err.message);
    }
})