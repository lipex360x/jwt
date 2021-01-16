import { v4 as uuid } from 'uuid'
import bcrypt from 'bcryptjs'

import User from '@modules/users/infra/typeorm/entities/User'
import IUsersInterface, { CreateProps } from '../interfaces/IUsersInterface'

export default class FakeUserRepository implements IUsersInterface {
  private repository: User[] = []

  async create ({ name, email, password }:CreateProps): Promise<User> {
    const entity_data = new User()

    Object.assign(entity_data, {
      user_id: uuid(),
      name,
      email,
      password: bcrypt.hashSync(password, 8),
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(entity_data)

    return entity_data
  }
}
