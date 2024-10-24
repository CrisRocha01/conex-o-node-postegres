import CreatePersonUseCase from '../create-person'
import { PersonRepository } from '@/repositories/person.repository'

export function makeCreatePersonUseCase() {
  const personRepository = new PersonRepository()
  const CreateCreatePersonUseCase = new CreatePersonUseCase(personRepository)

  return CreateCreatePersonUseCase
}
