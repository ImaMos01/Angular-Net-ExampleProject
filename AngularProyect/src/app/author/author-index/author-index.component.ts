import { Component, inject, Input,numberAttribute } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthorService } from '../author.service';
import { PaginationDTO } from '../../shared/models/PaginationDto';
import { HttpResponse } from '@angular/common/http';
import { AuthorDTO } from '../author';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-author-index',
  standalone: true,
  imports: [MatIconModule, RouterLink, MatButton, GenericListComponent, MatTableModule, MatPaginatorModule, SweetAlert2Module],
  templateUrl: './author-index.component.html',
  styleUrl: './author-index.component.css'
})
export class AuthorIndexComponent {

  authorsService = inject(AuthorService);
  pagination: PaginationDTO = {page: 1, recordsPerPage: 5}
  totalRecords!: number;
  authors!: AuthorDTO[];
  showColumns = ['id', 'name', 'actions'];

  constructor(){
    this.loadRecords();
  }

  loadRecords(){
    this.authorsService.getPagination(this.pagination)
    .subscribe((resp: HttpResponse<AuthorDTO[]>) => {
      this.authors = resp.body as AuthorDTO[];
      const header = resp.headers.get('amount-total-registers') as string;
      this.totalRecords = parseInt(header,10);
    }) 
  }
  
  updatePagination(data: PageEvent){
    this.pagination = {page: data.pageIndex +1, recordsPerPage:data.pageSize};
    this.loadRecords();
  }

  delete(id: number){
    this.authorsService.delete(id)
    .subscribe(() =>{
      this.pagination.page = 1;
      this.loadRecords();
    })
  }
}
