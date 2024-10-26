import { IUserRepository } from '@/repositories/user.repository.inteface'
import { IUser } from '@/entities/models/user.interface'

export default class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(user: IUser): Promise<IUser | undefined> {
    return this.userRepository.create(user)
  }
}
