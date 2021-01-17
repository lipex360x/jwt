import { inject, injectable } from 'tsyringe'
import { sign } from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import AppError from '@shared/errors/AppError'

import User from '@modules/users/infra/typeorm/entities/User'
import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'

interface Request{
  email: string
  password: string
}

interface Response {
  user: User,
  token: string
}

@injectable()
export default class CreateSessionService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute ({ email, password }: Request): Promise<Response> {
    const getUser = await this.repository.findByEmail({ email })

    if (!getUser) throw new AppError('Combination user/password is wrong', 401)

    const isValidPassword = await bcrypt.compare(password, getUser.password)

    if (!isValidPassword) throw new AppError('Combination user/password is wrong', 401)

    const token = sign({ user_id: getUser.user_id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES })

    return { user: getUser, token }
  }
}
