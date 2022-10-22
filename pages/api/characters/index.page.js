import { dbConnect, dbPrefix } from '../../../utils/dbClient'
import { ref, child, get, update } from 'firebase/database'
import { ulid } from 'ulid'
import { AddNewCharacterSchema } from '../../../schema/addNewCharacter.schema'
import schemaValidator from '../../../utils/schemaValidator'

const handlers = {
  get: getCharacters,
  post: addCharacter
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

async function addCharacter (req, res, database, dbPrefix) {
  const data = req.body
  const validate = schemaValidator(AddNewCharacterSchema)
  const valid = validate(data)

  if (!valid) {
    res.status(400).json({
      message: 'Bad request',
      errors: validate.errors
    })
    res.end()
  } else {
    await update(child(ref(database), `${dbPrefix}/characters/${ulid()}`), data)
    res.status(204).end()
  }
}
