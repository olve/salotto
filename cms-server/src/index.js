import express from 'express'
import redist from 'redist'

const app = express()
const router = express.Router()


router.route('/images')
  .post((req, res) => {
    //change something
  })
  .get((req, res) => {
    //return something
    res.json({message: 'hi'})
  })




//prefix urls with /api
app.use(process.env.CMS_API_ROOT, router)
app.listen(process.env.CMS_API_PORT)


console.log(`listening on ${process.env.CMS_API_ROOT} on port ${process.env.CMS_API_PORT}`)
