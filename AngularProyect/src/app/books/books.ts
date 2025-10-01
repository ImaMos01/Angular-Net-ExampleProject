export interface BookDTO{
    id:number;
    title: string;
    releaseDate: Date;
    review: string;
    cover?: string;
}

export interface BookCreationDTO{
    title: string;
    releaseDate: Date;
    review: string;
    cover?: string;
    genresId?: number[];
    libraryId?: number[];
}