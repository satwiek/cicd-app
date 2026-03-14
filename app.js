const http = require('http');
const server = http.createServer((req,res)=>{
  res.end("Hello from CI/CD Pipeline running on Kubernetes!");
});
server.listen(3000, ()=>console.log("App running on port 3000"));
