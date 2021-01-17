import { Router } from 'express'

import CreateUserController from '../controllers/CreateUserController'
import auth from '@shared/middlewares/auth'

const router = Router()

const createUserController = new CreateUserController()

router.get('/', createUserController.show)
router.post('/', createUserController.create)

router.use(auth)

export default router
