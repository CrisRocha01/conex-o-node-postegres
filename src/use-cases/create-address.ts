import { IAddressRespository } from '@/repositories/address.repository.interface'
import { IAddress } from '@/entities/models/address.interface'

export class CreateAddressUseCase {
  constructor(private AddressRepository: IAddressRespository) {}

  async handler(address: IAddress): Promise<IAddress | undefined> {
    return this.AddressRepository.create(address)
  }
}
