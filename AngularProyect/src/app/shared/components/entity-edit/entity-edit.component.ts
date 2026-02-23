import { Component, ComponentRef, inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SERVICE_CRUD_TOKEN } from '../../supplier/supplier';
import { Router } from '@angular/router';
import { IServiceCRUD } from '../../interfaces/IServiceCRUD';
import { errorExtract } from '../../functions/errorExtract';
import { ShowErrosComponent } from "../show-erros/show-erros.component";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-entity-edit',
  imports: [ShowErrosComponent, LoadingComponent],
  templateUrl: './entity-edit.component.html',
  styleUrl: './entity-edit.component.css'
})
export class EntityEditComponent<TDTO, TCreationDTO> implements OnInit{

  ngOnInit(): void {
    this.serviceCRUD.getById(this.id).subscribe(entity => {
      this.loadComponents(entity);
    })
  }

  loadComponents(entity: any){
    if(this.containerForm){
      this.componentRef = this.containerForm.createComponent(this.formulary);
      this.componentRef.instance.model = entity;
      this.componentRef.instance.postForm.subscribe((entity: any)=>{
        this.saveChanges(entity);
      })

      this.loading = false;
    }
  }

  @Input()
  id!: number;

  @Input({required: true})
  title!: string;

  @Input({required: true})
  pathIndex!: string;

  @Input({required: true})
  formulary: any;

  errors: string[] = [];

  serviceCRUD = inject(SERVICE_CRUD_TOKEN) as IServiceCRUD<TDTO, TCreationDTO>;
  private router = inject(Router);
  loading = true;

  @ViewChild('conteinerForm',{read: ViewContainerRef})
  containerForm!: ViewContainerRef;

  private componentRef!: ComponentRef<any>

  saveChanges(entity:TCreationDTO){
    this.serviceCRUD.update(this.id,entity).subscribe({
      next: () => {
        this.router.navigate([this.pathIndex]);
      },
      error: err => {
        const errors = errorExtract(err);
        this.errors = errors;
      }
    });
  }
}
