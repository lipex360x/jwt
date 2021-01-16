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
})
