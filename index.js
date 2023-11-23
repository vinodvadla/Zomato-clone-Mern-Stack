const app = require('./middlewares/middlewares')
const express = require('express')
const Dbconnect = require('./database/db')
Dbconnect()
app.use(express.static('./public'))

app.listen(process.env.PORT, () => {
    console.log("server running on port 5000")
})
