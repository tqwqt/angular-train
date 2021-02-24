export enum BookCategories {
  Fantasy = 'Fantasy',
  Detective = 'Detective',
  Horror = 'Horror',
  Romance = 'Romance',
  ScienceFiction = 'ScienceFiction',
}

export interface IBook {
  name: string;
  description: string;
  price: number;
  category: BookCategories,
  createDate: number;
  isAvailable: boolean;
}
