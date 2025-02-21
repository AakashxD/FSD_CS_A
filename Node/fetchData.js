const http =require('http');

const server =http.createServer(async(req,res)=>{
    res.setHeader("Content-Type", "text/html");
         res.statusCode=200;
         try {
            const data=await fetch("https://api.github.com/search/users?q=location:ghaziabad");
            const  rest= await data.json();
            console.log(res);
            const names = rest.items.map((e) => {
                res.write(`<img src="${e.avatar_url}"> image is</img>`);
        });
        res.end();
         } catch (error) {
            console.log(error);
         }
       
});
server.listen(9999,()=>{
    console.log("server running on the port");
})