import { IProductRepository } from '../repositories/product.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export class FindProductUseCase {
  constructor(private ProductRepository: IProductRepository) {}

  async handler(id: string) {
    const product = await this.ProductRepository.findyById(id)

    if (!product) throw new ResourceNotFoundError()

    return product
  }
}
