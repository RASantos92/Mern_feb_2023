const destinationController = require("../controllers/destination.controller")


module.exports = app => {
    app.post("/api/destinations", destinationController.create),
    app.get("/api/destinations", destinationController.getAll),
    app.get("/api/destinations/random", destinationController.random),
    app.get("/api/destinations/:id", destinationController.getOne),
    app.delete("/api/destinations/:id", destinationController.deleteOne),
    app.put("/api/destinations/:id", destinationController.updateOne)
}