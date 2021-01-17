import AppError from '@shared/errors/AppError'

import FakeUserRepository from '@modules/users/repositories/fakes/FakeUserRepository'
import CreateSessionService from './CreateSessionService'

let fakeUserRepository: FakeUserRepository
let createSessionService: CreateSessionService

describe('AuthUsuario', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository()
    createSessionService = new CreateSessionService(fakeUserRepository)
  })

  it('should be able to authenticate an user', async () => {
    await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '123456'
    })

    const response = await createSessionService.execute({ email: 'johndoe@mail.com', password: '123456' })

    expect(response).toHaveProperty('token')
  })

  it('should not be able to authenticate a non-existing user', async () => {
    await expect(createSessionService.execute({
      email: 'johndoe@mail.com', password: '123456'
    })).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate with password is wrong', async () => {
    await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '123456'
    })

    await expect(createSessionService.execute({
      email: 'johndoe@mail.com', password: '112233'
    })).rejects.toBeInstanceOf(AppError)
  })
})
