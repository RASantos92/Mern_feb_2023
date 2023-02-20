const Song = require('../models/song.model');

module.exports.create = (req, res) => {
    Song.create(req.body)
        .then(newSong => {
            return res.json(newSong)
        }).catch(err => {
            return res.json(err)
        })
}

module.exports.getAll = (req, res) => {
    Song.find({})
        .then(allSongs => {
            return res.json(allSongs)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.getOne = (req, res) => {
    Song.findById({ _id: req.params.id })
        .then(song => {
            return res.json(song)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.deleteOne = (req, res) => {
    Song.deleteOne({ _id: req.params.id })
        .then(deletedSong => {
            return res.json(deletedSong)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.updateOne = (req, res) => {
    Song.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
        .then(updatedSong => {
            return res.json(updatedSong)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.random = (req, res) => {
    Song.find({})
        .then(allSongs => {
            return res.json(allSongs[Math.floor(Math.random() * allSongs.length)])
        }).catch(err => {
            return res.json(err)
        })
}
