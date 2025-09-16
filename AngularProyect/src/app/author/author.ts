export interface AuthorDTO{
    id: number;
    name: string;
    birthDate: Date;
    photo?: string;
}

export interface AuthorCreationDto{
    name: string;
    birthDate: Date;
    photo?: File;
}