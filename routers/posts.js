const express = require("express")

const router = express.Router()

//index
router.get('/', (req, res) => {
    res.send('Lista dei post')
})

// show
router.get('/:id', (req, res) => {
    res.send(`Dettagli del post: ${req.params.id}`)
})

// create
router.post('/', (req, res) => {
    res.send('Creazione del post')
})

// update
router.put('/:id', (req, res) => {
    res.send(`Modifica completa del post: ${req.params.id}`)
})

//mordify
router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale del post: ${req.params.id}`)
})

//delete
router.delete('/:id', (req, res) => {
    res.send(`Eliminazione del post: ${req.params.id}`)
})

module.exports = router;