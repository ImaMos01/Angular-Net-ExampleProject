import { Component, inject, Input } from '@angular/core';
import { PaginationDTO } from '../../models/PaginationDto';
import { SERVICE_CRUD_TOKEN } from '../../supplier/supplier';
import { GenericListComponent } from "../generic-list/generic-list.component";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IServiceCRUD } from '../../interfaces/IServiceCRUD';

@Component({
  selector: 'app-entity-index',
  standalone: true,
  imports: [GenericListComponent,RouterLink, MatButtonModule, GenericListComponent, MatTableModule, MatPaginatorModule, SweetAlert2Module],
  templateUrl: './entity-index.component.html',
  styleUrl: './entity-index.component.css'
})
export class EntityIndexComponent<TDTO, TCreationDTO> {
  @Input({required: true})
  title!: string;

  @Input({required: true})
  createPath!: string;

  @Input({required: true})
  editPath!: string;

  @Input()
  showColumns = ['id','name','actions'];

  servicesCRUD = inject(SERVICE_CRUD_TOKEN) as IServiceCRUD<TDTO,TCreationDTO>;

  pagination: PaginationDTO = {page: 1, recordsPerPage: 5}
  entities!: TDTO[];
  amountTotalRecords!: number;

  constructor(){
    this.loadRecords();
  }

  loadRecords(){
    this.servicesCRUD.getPagination(this.pagination).subscribe((response: HttpResponse<TDTO[]>) =>{
      this.entities = response.body as TDTO[];
      const header = response.headers.get("amount-total-registers") as string;
      this.amountTotalRecords = parseInt(header, 10);
    });
  }

  updatePagination(data: PageEvent){
    this.pagination = {page: data.pageIndex + 1, recordsPerPage: data.pageSize};
    this.loadRecords()
  }

  delete(id: number){
    this.servicesCRUD.delete(id)
    .subscribe(()=>{
      this.pagination = { page: 1, recordsPerPage: 5};
      this.loadRecords();
    })
  }

  firstUpper(value: string){
    if(!value) return value;
    return value.charAt(0).toUpperCase()+value.slice(1);
  }
}
