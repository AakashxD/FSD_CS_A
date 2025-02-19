const http = require("http");
const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");
 try {
    const data = await fetch("https://dummyjson.com/recipes");
    const result = await data.json();
    console.log(result);
    res.statusCode = 200;
    const names = result.recipes.map((e) => {
        res.write("<h2 style='color:red'>"+e.name+"</h2>");
});
    res.end();
  } catch (error) {
    console.error("Fetch error:", error);
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
});
server.listen(9900, () => {
  console.log("Server running on port 9900");
});
