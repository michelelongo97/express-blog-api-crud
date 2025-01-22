const postsData = require("../data/posts");

//index
const index = (req, res) => {
    res.send('Lista dei post')
}

//show
const show = (req, res) => {
    res.send(`Dettagli del post: ${req.params.id}`)
}

//create
const create = (req, res) => {
    res.send('Creazione del post')
}

//update
const update = (req, res) => {
    res.send(`Modifica completa del post: ${req.params.id}`)
}

//modify
const modify = (req, res) => {
    res.send(`Modifica parziale del post: ${req.params.id}`)
}

//delete
const destroy = (req, res) => {
    res.send(`Eliminazione del post: ${req.params.id}`)
}


module.exports = { index, show, create, update, modify, destroy }