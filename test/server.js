const express = require("express");
const cors = require("cors");
const port = 8001;

const app = express();

app.use(cors()); 

app.use(express.json(), express.urlencoded({extended: true}));

app.get("/api/testing", (req,res)=>{
    console.log("testing")
})

app.listen(port, () => {
    console.log(`Listening on port ${port} for requests to respond to.`)
})