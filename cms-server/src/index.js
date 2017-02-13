import express from 'express'
import redist from 'redist'
import bodyParser from 'body-parser'

function cors(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
}

const app = express()
const router = express.Router()



app.use(bodyParser.json())
app.use(cors)

router.route('/images')
  .post((req, res) => {
    console.log(req.body.images)
    res.json({message: 'post'})
  })
  .get((req, res) => {
    res.json({message: 'get'})
  })

app.use(process.env.CMS_API_ROOT, router)
app.listen(process.env.CMS_API_PORT)


console.log(`listening on ${process.env.CMS_API_ROOT} on port ${process.env.CMS_API_PORT}`)
