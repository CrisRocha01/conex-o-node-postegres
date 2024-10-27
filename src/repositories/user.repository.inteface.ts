import { Person } from '@/entities/person.entity'
import { User } from '@/entities/user.entity'

export interface IUserRepository {
  findWithPerson(udserId: number): Promise<(User & Person) | undefined>
  create(user: User): Promise<User | undefined>
}