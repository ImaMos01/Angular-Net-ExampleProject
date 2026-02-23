import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { PaginationDTO } from "../models/PaginationDto";

export interface IServiceCRUD<TDTO, TCreationDTO>{
    getPagination(Pagination: PaginationDTO): Observable<HttpResponse<TDTO[]>>;
    getById(id: number): Observable<TDTO>;
    update(id: number, genre: TCreationDTO): Observable<any>;
    create(genre: TCreationDTO): Observable<any>;
    delete(id: number): Observable<any>;
}