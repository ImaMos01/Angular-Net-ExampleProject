import { inject,Injectable } from '@angular/core';
import { genreDTO, genresCreationDTO } from './genres';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaginationDTO } from '../shared/models/PaginationDto';
import { buildQueryParams } from '../shared/functions/buildQueryParams';


@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/genres';

  constructor() { }

  public getPagination(Pagination: PaginationDTO): Observable<HttpResponse<genreDTO[]>>{
    let queryParams = buildQueryParams(Pagination);
    return this.http.get<genreDTO[]>(this.urlBase,{params:queryParams, observe: 'response'});
  }

  public create(genre: genresCreationDTO){
    return this.http.post(this.urlBase,genre);
  }
}
