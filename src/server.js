import express from 'express'
import cors from 'cors'
import { default as mongodb } from 'mongodb'

let dbclient = {}, dbInitiated
export async function init() {
  if(dbInitiated) { return dbInitiated }
  const url = 'mongodb://admin:Jky4qESvuk5J@46.161.54.145:2016/?authSource=admin&readPreference=primary'
  const mongoClient = mongodb.MongoClient
  const client = await (new mongoClient(url, { useUnifiedTopology: true })).connect()
  dbclient.client = client
  const db = client.db('markov_passwords')
  dbInitiated = db
  return db
}

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const app = express()
const port = 37778

app.get('/vote', cors(corsOptions), async (req, res) => {
  let db = await init()
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  let voted = await db.collection('poll').find({ ip: ip }).limit(1).toArray()
  if(voted.length) {
    let [yes, no] = await results(db)
    res.json({ voted: true, ...percentage(yes, no) })
  } else {
    res.json({ voted: false })
  }
})

app.post('/vote/:yes', cors(corsOptions), async (req, res) => {
  let db = await init()
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  let voted = await db.collection('poll').find({ ip: ip }).limit(1).toArray()
  if(voted.length) {
    res.status(409).json({ error: 'You already voted, silly :)' })
  } else {
    await db.collection('poll').insertOne({ ip, yes: req.params.yes === 'true' })
    let [yes, no] = await results(db)
    res.json({ voted: true, ...percentage(yes, no) })
  }
})

const results = async db => {
  let yes = await db.collection('poll').countDocuments({ yes: true })
  let no = await db.collection('poll').countDocuments({ yes: false })
  return [yes, no]
}

const percentage = (yes, no) => {
  let sum = yes+no
  return { yes: (yes/sum*100).toFixed(1)+'%', no: (no/sum*100).toFixed(1)+'%' }
}

app.listen(port, () => {
  console.log(`API for markov_passwords listening at http://localhost:${port}`)
})
