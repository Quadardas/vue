export interface IItem{
    id: number;
    category: string;
    title: string;
    price: number;
    description: IItemRating;
    image: string
}
export interface IItemRating{
    count: number;
    rate: number;
}