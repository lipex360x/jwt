import express from 'express'
import 'dotenv/config'
import 'express-async-errors'
import 'reflect-metadata'

import '@shared/infra/typeorm'
import '@shared/containers'

import routes from './routes'
import routerError from '@shared/errors/RouterError'

const app = express()

app.use(express.json())
app.use(routes)

app.use(routerError)

export default app
