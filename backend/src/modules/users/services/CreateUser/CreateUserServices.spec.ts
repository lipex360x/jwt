import AppError from '@shared/errors/AppError'

import FakeUserRepository from '@modules/users/repositories/fakes/FakeUserRepository'
import CreateUserService from './CreateUserService'

let fakeUserRepository: FakeUserRepository
let createUserService: CreateUserService

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository()
    createUserService = new CreateUserService(fakeUserRepository)
  })

  it('should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'Jonh Doe',
      email: 'jonh@mail.com',
      password: 'fakepasswd'
    })

    expect(user).toHaveProperty('user_id')
  })

  it('should not be able to create a duplicate user', async () => {
    await fakeUserRepository.create({
      name: 'Jonh Doe',
      email: 'jonh@mail.com',
      password: 'fakepasswd'
    })

    await expect(
      createUserService.execute({
        name: 'Jonh Doe',
        email: 'jonh@mail.com',
        password: 'fakepasswd'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
