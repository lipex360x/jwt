import { inject, injectable } from 'tsyringe'

// import AppError from '@shared/errors/AppError'

import User from '@modules/users/infra/typeorm/entities/User'
import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'

interface Request{
  name: string,
  email: string,
  password: string
}

@injectable()
export default class CreateUserService {
  constructor (
    @inject('UsersInterface')
    private repository: IUsersRepository
  ) {}

  async execute ({ name, email, password }: Request): Promise<User> {
    const setUser = await this.repository.create({
      name, email, password
    })

    return setUser
  }
}
