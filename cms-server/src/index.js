import express from 'express'
import redist from 'redist'

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
  res.json({message: 'hi'})
})





app.use('/api', router)
app.listen(process.env.PORT)
console.log(`listening on /api on port ${process.env.PORT}`)
