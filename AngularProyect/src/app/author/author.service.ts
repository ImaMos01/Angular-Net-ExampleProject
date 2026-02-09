import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthorCreationDto, AuthorDTO } from './author';
import { PaginationDTO } from '../shared/models/PaginationDto';
import { buildQueryParams } from '../shared/functions/buildQueryParams';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/authors';

  public getPagination(pagination: PaginationDTO): Observable<HttpResponse<AuthorDTO[]>>{
    let queryParams = buildQueryParams(pagination);
    return this.http.get<AuthorDTO[]>(this.urlBase, {params: queryParams, observe: 'response'});
  }

  public getById(id:number): Observable<AuthorDTO>{
    return this.http.get<AuthorDTO>(`${this.urlBase}/${id}`);
  }

  public update(id:number, author: AuthorCreationDto){
    const formData = this.buildFormData(author);
    return this.http.put(`${this.urlBase}/${id}`,formData);
  }

  public create(author: AuthorCreationDto){
    const formData = this.buildFormData(author);
    return this.http.post(this.urlBase,formData);
  }

  public delete(id:number){
    return this.http.delete(`${this.urlBase}/${id}`);
  }

  private buildFormData(author: AuthorCreationDto): FormData{
    const formData = new FormData();

    formData.append('name', author.name);

    formData.append('birthDate', author.birthDate.toISOString().split('T')[0]);

    if(author.photo){
      formData.append('photo',author.photo);
    }

    return formData;
  }
}
