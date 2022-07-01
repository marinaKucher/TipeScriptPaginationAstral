export interface ICard{
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
}
export interface ICardProps{
    imageUrl:string;
    dateOfCreation:string;
}
export type IProps={
    liked:boolean
}
export interface ICardListProps{
    items : ICard[]
}