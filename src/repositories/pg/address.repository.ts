import { Address } from '@/entities/address.entity'
import { database } from '@/lib/pg/db'
import { IaddressRespository } from '../address.repository.interface'
import { Person } from '@/entities/person.entity'

export class AddressRepository implements IaddressRespository {
  async findAddressByPersonId(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(Address & Person)[]> {
    const offset = (page - 1) * limit

    const query = `
        SELECT address.*, person.*
        FROM address
        JOIN person ON address.person_id = person.id
        WHERE person.id = $1
        LIMIT $2 OFFSET $3
    `
    const result = await database.clientInstance?.query<Address & Person>(
      query,
      [personId, limit, offset],
    )
    return result?.rows || []
  }

  // create(address: Address): Promise<Address | undefined> {}
}
