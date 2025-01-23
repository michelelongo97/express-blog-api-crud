const postsData = require("../data/posts");

//index
const index = (req, res) => {
    res.json(postsData)
}

//show
const show = (req, res) => {
    const post = postsData.find((elm) => elm.id == req.params.id);
    res.json(post)
}

//create
const create = (req, res) => {
    const newId = postsData[postsData.length - 1].id + 1
    const newPost = {
        id: newId,
        name: req.body.name,
        tags: req.body.tags 
    }

    postsData.push(newPost);

    res.sendStatus(201);
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
    const post = postsData.find((elm) => elm.id == req.params.id);

    if (!post) {
        return res.status(404).json({
            error: "Post not found"
        });
    }

    postsData.splice(postsData.indexOf(post), 1);
    console.log("Post aggiornati:", postsData);

    res.sendStatus(204);
    
}


module.exports = { index, show, create, update, modify, destroy }