import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.listen(4000, () => {
    console.log("Running on 4k port")
})

