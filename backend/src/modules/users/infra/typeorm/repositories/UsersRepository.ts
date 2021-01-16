import { Repository, getRepository } from 'typeorm'

import User from '../entities/User'
import IUsersRepository, { CreateProps } from '@modules/users/repositories/interfaces/IUsersRepository'

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor () {
    this.repository = getRepository(User)
  }

  async create ({ name, email, password }:CreateProps): Promise<User> {
    const setUser = this.repository.create({ name, email, password })

    await this.repository.save(setUser)

    return setUser
  }
}
