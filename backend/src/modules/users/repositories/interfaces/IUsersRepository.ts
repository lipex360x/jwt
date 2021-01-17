import User from '@modules/users/infra/typeorm/entities/User'

export interface CreateProps {
  name: string,
  email: string,
  password: string,
}

export interface FindUserProps {
  email: string
}

export default interface IUsersInterface {
  create(data: CreateProps): Promise<User>
  findUser(data: FindUserProps): Promise<User>
}
