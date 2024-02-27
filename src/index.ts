import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello Worrld")
})
app.listen(4000, () => {
    console.log("Running on 4k port")
})

