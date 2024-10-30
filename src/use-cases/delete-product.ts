import { IProductRepository } from '../repositories/product.repository.interface'

export class DeleteProductUseCase {
  constructor(private ProductRepository: IProductRepository) {}
  async handler(id: string): Promise<void> {
    return this.ProductRepository.delete(id)
  }
}
