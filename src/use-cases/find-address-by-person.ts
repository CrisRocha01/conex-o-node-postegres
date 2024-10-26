import { IAddressRespository } from '@/repositories/address.repository.interface'
import { IAddress } from '@/entities/models/address.interface'
import { IPerson } from '@/entities/models/person.interface'

export class FindAddressByPersonUseCase {
  constructor(private addressRepository: IAddressRespository) {}

  async handler(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & IPerson)[]> {
    return this.addressRepository.findAddressByPersonId(personId, page, limit)
  }
}
