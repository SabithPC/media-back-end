// import json server
const jsonserver=require('json-server')
// create jsonserver
const server=jsonserver.create()
// middle ware  .it acts as parser
const middleware=jsonserver.defaults()
// set router
const router=jsonserver.router("db.json")
// create port
const PORT=process.env.PORT ||4000
// middleware use in server
server.use(middleware)
// use router
server.use(router)
// run server
server.listen(PORT,()=>{
    console.log("media player server started at port:"+PORT);
})

