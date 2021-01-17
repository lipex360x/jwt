import { container } from 'tsyringe'

import IUsersInterface from './interfaces/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

const providers = {
  sqliteDB: UsersRepository
}

container.registerSingleton<IUsersInterface>(
  'UsersRepository',
  providers.sqliteDB
)
