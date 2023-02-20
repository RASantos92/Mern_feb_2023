const songController = require("../controllers/song.controller")


module.exports = app => {
    app.post("/api/songs", songController.create),
    app.get("/api/songs", songController.getAll),
    app.get("/api/songs/random", songController.random),
    app.get("/api/songs/:id", songController.getOne),
    app.delete("/api/songs/:id", songController.deleteOne),
    app.put("/api/songs/:id", songController.updateOne)
}