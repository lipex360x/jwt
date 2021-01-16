import { inject, injectable } from 'tsyringe'

// import AppError from '@shared/errors/AppError'

import User from '@modules/users/infra/typeorm/entities/User'
import IUsersInterface from '@modules/users/repositories/interfaces/IUsersInterface'

interface Request{
  name: string,
  email: string,
  password: string
}

@injectable()
export default class CreateUserService {
  constructor (
    @inject('UsersInterface')
    private repository: IUsersInterface
  ) {}

  async execute ({ name, email, password }: Request): Promise<User> {
    const setUser = await this.repository.create({
      name, email, password
    })

    return setUser
  }
}
