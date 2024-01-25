const { getPosts, addPost } = require("./consultas")
const express = require("express");
const cors =require ("cors")
const app = express()

//levanta el servidor
app.listen(3000, console.log("servidor levantado"))
app.use(express.json())
app.use(cors())

//ruta que permite que el fronted reciba los registros a bd
app.get("/posts", async (req, res) => {
    const posts = await getPosts();
    res.json(posts)
})
app.post("/posts", async(req,res)=>{
    const {titulo, img, descripcion, likes} = req.body
    addPost(titulo, descripcion, img, likes)
    res.status(201).json("Post agregado")
})