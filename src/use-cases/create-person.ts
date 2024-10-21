import { Person } from '@/entities/person.entity'
import { PersonRepository } from '@/repositories/person.repository'

export default class CreatePersonUseCase {
  constructor(private personRepository: PersonRepository) {}

  handler(person: Person) {
    return this.personRepository.create(person)
  }
}
