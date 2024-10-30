import { ICategory } from './category.interface'

export interface IProduct {
  id?: string | undefined
  name: string
  description: string
  image: string
  price: number
  categories?: ICategory[]
}
