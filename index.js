const PORT= 8000
const http= require ('http')
const fs= require('fs')

const server=http.createServer((req,res)=>{
    let today= new Date().toISOString()
    fs.writeFileSync(`DateTime/${today}.txt`,`${today}`,'utf8')
     
    let data= fs.readFileSync(`DateTime/${today}.txt`,'utf8')
    res.writeHead(200,{
        "content-Type":"text/html"
    })
    res.end(data)
})
server.listen(PORT,()=>console.log('App listening to ${PORT}'))
