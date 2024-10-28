import { IProductRepository } from '@/repositories/product.repository.interface'
import { IProduct } from '@/entities/models/product.interface'

export class CreateProductUseCase {
  constructor(private ProductRepository: IProductRepository) {}

  async handler(product: IProduct): Promise<IProduct> {
    return this.ProductRepository.create(product)
  }
}
