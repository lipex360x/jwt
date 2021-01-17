import { inject, injectable } from 'tsyringe'

import AppError from '@shared/AppError/AppError'

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
    const getUser = await this.repository.findUser({ email })

    if (getUser) throw new AppError('This user is already exists')

    const setUser = await this.repository.create({
      name, email, password
    })

    return setUser
  }
}
