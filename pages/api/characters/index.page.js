import { dbConnect, dbPrefix } from '../../../utils/dbClient'
import { ref, child, get } from 'firebase/database'

const handlers = {
  get: getCharacters
}

export default async function handler (req, res) {
  let database
  try {
    database = await dbConnect()
  } catch (err) {
    console.error(err)
    res.statusCode = 400
    res.end()
  }

  const { method } = req
  const handler = handlers[method.toLowerCase()]

  if (handler) return handler(req, res, database, dbPrefix)
  else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405)
    res.end(`Method ${method} Not Allowed`)
  }
}

async function getCharacters (req, res, database, dbPrefix) {
  const snapshot = await get(child(ref(database), `${dbPrefix}/characters`))
  if (!snapshot.exists()) return res.json([])

  const snapshotValue = snapshot.val()
  const data = Object.keys(snapshot.val()).map((key) => ({
    ...snapshotValue[key],
    id: key
  }))

  res.json(data)
}
