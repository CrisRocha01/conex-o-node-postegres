import { IUserRepository } from '@/repositories/user.repository.inteface'
import { InvalidCredentialError } from './errors/invalid-credential-error'

export class SigninUseCase {
  constructor(private readonly UserRepository: IUserRepository) {}

  async handler(username: string) {
    const user = await this.UserRepository.findByUsername(username)

    if (!user) {
      throw new InvalidCredentialError()
    }

    return user
  }
}
