import express from 'express'
import redist from 'redist'

const app = express()
const router = express.Router()

function cors(response) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}

router.route('/images')
  .post((req, res) => {
    cors(res)
    res.json({message: 'post'})
  })
  .get((req, res) => {
    cors(res)
    res.json({message: 'get'})
  })


//prefix urls with /api
app.use(process.env.CMS_API_ROOT, router)
app.listen(process.env.CMS_API_PORT)


console.log(`listening on ${process.env.CMS_API_ROOT} on port ${process.env.CMS_API_PORT}`)
