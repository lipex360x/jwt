import express from 'express'
import 'reflect-metadata'

import routes from './routes'

import '@shared/infra/typeorm'
import '@shared/containers'

const app = express()

app.use(express.json())
app.use(routes)

export default app
