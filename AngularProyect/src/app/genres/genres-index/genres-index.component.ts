import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenresService } from '../genres.service';
import { genreDTO } from '../genres';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatTableModule } from '@angular/material/table';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PaginationDTO } from '../../shared/models/PaginationDto';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@Component({
  selector: 'app-genres-index',
  imports: [RouterLink, MatButtonModule, GenericListComponent, MatTableModule, MatPaginatorModule, SweetAlert2Module],
  templateUrl: './genres-index.component.html',
  styleUrl: './genres-index.component.css'
})
export class GenresIndexComponent {
  genresService = inject(GenresService)
  genres!: genreDTO[];
  showColumns = ['id','name','actions'];
  pagination: PaginationDTO = {page: 1, recordsPerPage: 5};
  amountTotalRecords!: number;

  constructor(){
    this.loadRecords();
  }

  loadRecords(){
    this.genresService.getPagination(this.pagination).subscribe((response: HttpResponse<genreDTO[]>) =>{
      this.genres = response.body as genreDTO[];
      const header = response.headers.get("amount-total-registers") as string;
      this.amountTotalRecords = parseInt(header, 10);
    });
  }

  updatePagination(data: PageEvent){
    this.pagination = {page: data.pageIndex + 1, recordsPerPage: data.pageSize};
    this.loadRecords()
  }

  delete(id: number){
    this.genresService.delete(id)
    .subscribe(()=>{
      this.pagination = { page: 1, recordsPerPage: 5};
      this.loadRecords();
    })
  }
}
