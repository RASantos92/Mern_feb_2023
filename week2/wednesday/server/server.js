const port = 8000;
const express = require('express');

const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// The path is arg1, the callback is arg2 which is executed when the path
// is visited.

const callBack = (req, res) => {
    return res.json({hello: "world"})
}
app.get("/", callBack)


app.get("/api/users", (req, res) => {
    return res.json({users: users})
})

app.post("/api/users", (req,res) => {
    console.log(req.body);

    return res.json({
        status: "success",
        user: req.body
    })
})

app.delete("/api/users/:id", (req,res)=> {
    console.log(req.params);

    return res.json({
        status: "success",
        msg: `Deleted user id: ${req.params.id}`
    })
})

app.put("/api/users/:id", (req, res) => {
    console.log(req.body);

    return res.json({
        status: "success",
        msg: `Updated user id: ${req.params.id}`
    })
})

app.get("/api/users/:index", (req,res) => {
    const userToBeSentBack = users[req.params.index];
    return res.json({
        status: "success",
        user : userToBeSentBack
    })
})

// This is at the bottom because the server is not ready for requests until
// the routes have been set up.
app.listen(port, ()=> {
    console.log(`Listening on port ${port} for requests to resonpd to.`)
})