export interface AuthorDTO{
    id: number;
    name: string;
    birthDate: Date
}

export interface AuthorCreationDto{
    name: string;
    birthDate: Date;
}