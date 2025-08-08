const express = require('express')
const PORT = 8000;

const app = express();
app.use(express.json()) //parse json

app.get("/", (req, res) => {
    res.send("welcome HELLO WORLD")
})

app.listen(PORT, ()=> {
     console.log(`success, running in http://localhost:${PORT} `)
})