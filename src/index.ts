import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World how is it  goigg xd")
})
app.listen(4000, () => {
    console.log("Running on 4k port")
})

