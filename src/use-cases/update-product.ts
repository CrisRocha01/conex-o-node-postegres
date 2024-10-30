import { IProduct } from '../entities/models/product.interface'
import { IProductRepository } from '../repositories/product.repository.interface'

export class UpdateProductUseCase {
  constructor(private ProductRepository: IProductRepository) {}

  async handler(product: IProduct) {
    return this.ProductRepository.update(product)
  }
}
