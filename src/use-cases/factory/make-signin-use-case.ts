import { UserRepository } from '../../repositories/pg/user.repository'
import { SigninUseCase } from '../signin'
export function makeSigninUseCase() {
  const userRepository = new UserRepository()

  const signinUserCase = new SigninUseCase(userRepository)
  return signinUserCase
}
