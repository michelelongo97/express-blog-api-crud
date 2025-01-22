const express = require("express")

const postController = require("../controllers/postsController");

const router = express.Router()

//index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// create
router.post('/', postController.create);

// update
router.put('/:id', postController.update)

//modify
router.patch('/:id', postController.modify)

//delete
router.delete('/:id', postController.destroy)

module.exports = router;