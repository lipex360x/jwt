import { Router } from 'express'

import usersRoutes from '@modules/users/infra/http/routes/users.routes'
import authRoutes from '@shared/middlewares/authRoutes/routes/auth.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/auth', authRoutes)

export default routes
