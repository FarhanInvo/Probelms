const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {
    const data = fs.readFileSync(`${__dirname}/contacts.json` , "utf-8");
        const objData = JSON.parse(data)
        
        // console.log(req.url)
        if(req.url == "/farhan")
        {
            res.end(objData[0].name+ " " +objData[0].phone);
        }else if(req.url == "/tabish")
        {
            res.end(objData[1].name+" "+objData[1].phone);
        }else if(req.url == "/ahsan")
        {
            res.end(objData[2].name+ " " +objData[2].phone);
        }else
        {
            res.end('User not found')
        }
});
server.listen(3000,'127.0.0.1',()=>{
    console.log('listening to port 3000')
});
