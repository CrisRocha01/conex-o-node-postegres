import { Person } from '@/entities/person.entity'

export class PersonRepository {
  async findById(id: number): Promise<Person> {
    return {
      id,
      cpf: '123456',
      name: 'john doe',
      birth: new Date('1990-10-01'),
      email: 'test@gmail.com',
      user_id: 1,
    }
  }

  async create(person: Person): Promise<Person> {
    return person
  }
}
