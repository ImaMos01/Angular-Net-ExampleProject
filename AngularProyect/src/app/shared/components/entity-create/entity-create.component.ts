import { AfterViewInit, Component, ComponentRef, inject, Input, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { SERVICE_CRUD_TOKEN } from '../../supplier/supplier';
import { IServiceCRUD } from '../../interfaces/IServiceCRUD';
import { Router } from '@angular/router';
import { errorExtract } from '../../functions/errorExtract';
import { ShowErrosComponent } from "../show-erros/show-erros.component";
import { CdkDragPlaceholder } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-entity-create',
  imports: [ShowErrosComponent, CdkDragPlaceholder],
  templateUrl: './entity-create.component.html',
  styleUrl: './entity-create.component.css'
})
export class EntityCreateComponent<TDTO, TCreationDTO> implements AfterViewInit {

  ngAfterViewInit(): void {
    this.componentRef = this.containerForm.createComponent(this.formulary);
    this.componentRef.instance.postForm.subscribe((entity: any) =>{
      this.saveChanges(entity);
    })
  }

  @Input({required: true})
  title!: string;

  @Input({required: true})
  pathIndex!: string;

  @Input({required: true})
  formulary: any;

  errors: string[] = [];

  serviceCRUD = inject(SERVICE_CRUD_TOKEN) as IServiceCRUD<TDTO, TCreationDTO>;
  private router = inject(Router);

  @ViewChild('conteinerForm',{read: ViewContainerRef})
  containerForm!: ViewContainerRef;

  private componentRef!: ComponentRef<any>

  saveChanges(entity:TCreationDTO){
    this.serviceCRUD.create(entity).subscribe({
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
