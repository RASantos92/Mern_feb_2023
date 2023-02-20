const Destination = require('../models/destination.model');

module.exports.create = (req, res) => {
    Destination.create(req.body)
        .then(newDestination => {
            return res.json(newDestination)
        }).catch(err => {
            return res.status(400).json(err)
        })
}

module.exports.getAll = (req, res) => {
    Destination.find({})
        .then(allDestinations => {
            return res.json(allDestinations)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.getOne = (req, res) => {
    Destination.findById({ _id: req.params.id })
        .then(destination => {
            return res.json(destination)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.deleteOne = (req, res) => {
    Destination.deleteOne({ _id: req.params.id })
        .then(deletedDestination => {
            return res.json(deletedDestination)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.updateOne = (req, res) => {
    Destination.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
        .then(updatedDestination => {
            return res.json(updatedDestination)
        })
        .catch(err => {
            return res.status(400).json(err)
        })
}

module.exports.random = (req, res) => {
    Destination.find({})
        .then(allDestinations => {
            return res.json(allDestinations[Math.floor(Math.random() * allDestinations.length)])
        }).catch(err => {
            return res.json(err)
        })
}

const createManyDestinations = async (documents) => {
    // Don't await inside a loop, it will delay iteration.
    const createPromises = documents.map((document) =>
        Destination.create(document)
    );
    // The one resulting promise will be awaited by the caller of this function.
    return Promise.allSettled(createPromises);
};
module.exports.createMany = async (req, res) => {
    try {
        if (Array.isArray(req.body) === false) {
            throw new Error('The request body must be an array.')
        }
        const settledOutcomes = await createManyDestinations(req.body);
        return res.json(settledOutcomes)
    } catch (error){
        return res.status(400).json(error);
    }
}
