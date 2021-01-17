import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import logger from '@shared/utils/logger'

import CreateUserService from '@modules/users/services/CreateUser/CreateUserService'

export default class CreateUserController {
  async show (request: Request, response: Response): Promise<Response> {
    logger.log('Authenticated Router')
    return response.send('Hello User')
  }

  async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const createUserService = container.resolve(CreateUserService)

    const createUser = await createUserService.execute({ name, email, password })

    return response.json(classToClass(createUser))
  }
}
