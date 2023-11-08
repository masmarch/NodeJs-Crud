const express = require('express')
const app = express()
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:8081',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(express.json())
app.use('/image', express.static('./images'))
app.use(require('./src/routes/routes'))

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}`)
})