const express = require('express')
const app = express()
app.use(express.json())

app.use(require('./src/routes/routes'))

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}`)
})