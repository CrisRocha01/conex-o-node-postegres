import { Person } from '@/entities/person.entity'
import { IPersonRepository } from '@/repositories/person.repository.inteface'

export default class CreatePersonUseCase {
  constructor(private personRepository: IPersonRepository) {}

  handler(person: Person) {
    return this.personRepository.create(person)
  }
}
