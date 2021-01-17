import { Router } from 'express'

import CreateUserController from '../controllers/CreateUserController'
import authRoutes from '@shared/middlewares/authRoutes'

const router = Router()

const createUserController = new CreateUserController()

router.post('/', createUserController.create)

router.use(authRoutes)
router.get('/', createUserController.show)

export default router
