import { Person } from '@/entities/person.entity'
import { User } from '@/entities/user.entity'
import { IUser } from '../entities/models/user.interface'

export interface IUserRepository {
  findWithPerson(udserId: number): Promise<(User & Person) | undefined>
  findByUsername(username: string): Promise<IUser | undefined>
  create(user: User): Promise<User | undefined>
}
