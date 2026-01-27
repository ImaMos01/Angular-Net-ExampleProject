import { inject,Injectable } from '@angular/core';
import { genreDTO, genresCreationDTO } from './genres';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/genres';

  constructor() { }

  public getAll(): Observable<genreDTO[]>{
    return this.http.get<genreDTO[]>(this.urlBase);
  }

  public create(genre: genresCreationDTO){
    return this.http.post(this.urlBase,genre);
  }
}
