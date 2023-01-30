import { dbConnect, dbPrefix } from '../../../utils/dbClient'
import { ref, child, get, update, remove } from 'firebase/database'
import { AddToFavoriteSchema } from '../../../schema/addToFavorite.schema'
import schemaValidator from '../../../utils/schemaValidator'

const handlers = {
  get: getFavorites,
  post: addToFavorites,
  delete: deleteFromFavorites
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
    res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
    res.status(405)
    res.end(`Method ${method} Not Allowed`)
  }
}

async function getFavorites (req, res, database, dbPrefix) {
  const snapshot = await get(child(ref(database), `${dbPrefix}/favorites`))
  if (!snapshot.exists()) return res.json([])

  const snapshotValue = snapshot.val()

  const data = Object.keys(snapshotValue).map((key) => ({
    ...snapshotValue[key],
    id: key
  }))
  res.json(data)
}

async function addToFavorites (req, res, database, dbPrefix) {
  const data = { fav: true }
  const id = req.body.id
  const validate = schemaValidator(AddToFavoriteSchema)
  const valid = validate(data)

  if (!valid) {
    res.status(400).json({
      message: 'Bad request',
      errors: validate.errors
    })
    res.end()
  } else {
    await update(child(ref(database), `${dbPrefix}/favorites/${id}`), data)
  }
}

async function deleteFromFavorites (req, res, database, dbPrefix) {
  const { id } = req.body
  const lookupId = await get(
    child(ref(database), `${dbPrefix}/favorites/${id}`)
  )

  if (!lookupId.val()) {
    return res.status(404).json({
      message: `Board with id ${id} was not found`
    })
  }
  await remove(child(ref(database), `${dbPrefix}/favorites/${id}`))
  res.status(204).end()
}
