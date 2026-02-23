import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthorService } from '../author.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SERVICE_CRUD_TOKEN } from '../../shared/supplier/supplier';
import { EntityIndexComponent } from "../../shared/components/entity-index/entity-index.component";

@Component({
  selector: 'app-author-index',
  standalone: true,
  imports: [MatIconModule, MatTableModule, MatPaginatorModule, SweetAlert2Module, EntityIndexComponent],
  templateUrl: './author-index.component.html',
  styleUrl: './author-index.component.css',
  providers: [
    {provide: SERVICE_CRUD_TOKEN, useClass: AuthorService}
  ]
})
export class AuthorIndexComponent {
}
