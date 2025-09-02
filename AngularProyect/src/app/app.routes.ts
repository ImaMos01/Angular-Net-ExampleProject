import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenresIndexComponent } from './genres/genres-index/genres-index.component';
import { GenresAddComponent } from './genres/genres-add/genres-add.component';
import { AuthorAddComponent } from './author/author-add/author-add.component';
import { AuthorIndexComponent } from './author/author-index/author-index.component';
import { LibraryAddComponent } from './library/library-add/library-add.component';
import { LibraryIndexComponent } from './library/library-index/library-index.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { GenresEditComponent } from './genres/genres-edit/genres-edit.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { LibraryEditComponent } from './library/library-edit/library-edit.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';

export const routes: Routes = [
    {path: '',component: LandingPageComponent},

    {path: 'genre', component:GenresIndexComponent},
    {path: 'genre/create', component:GenresAddComponent},
    {path: 'genre/edit/:id', component:GenresEditComponent},

    {path: 'authors', component:AuthorIndexComponent},
    {path: 'authors/create', component:AuthorAddComponent},
    {path: 'authors/edit/:id', component:AuthorEditComponent},

    {path: 'library', component:LibraryIndexComponent},
    {path: 'library/create', component:LibraryAddComponent},
    {path: 'library/edit/:id', component:LibraryEditComponent},

    {path: 'book/create', component:BookAddComponent},
    {path: 'book/edit/:id', component:BookEditComponent},

    {path: '**', redirectTo:''},

];
