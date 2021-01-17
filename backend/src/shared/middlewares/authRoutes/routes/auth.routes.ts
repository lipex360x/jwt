import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import CreateSessionController from '../controllers/CreateSessionController'

const router = Router()

const createSessionController = new CreateSessionController()

router.post('/', celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }
}), createSessionController.show)

export default router
