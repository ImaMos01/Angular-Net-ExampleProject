import { Component, OnInit } from '@angular/core';
import { RatingComponent } from "../shared/components/rating/rating.component";
import { ListBooksComponent } from "../books/list-books/list-books.component";

@Component({
  selector: 'app-landing-page',
  imports: [RatingComponent, ListBooksComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
ngOnInit(): void {
   setTimeout(()=>{
      this.booksAvailable = [{
        name:"sas",
        price: 20.5,
        bookImage: "https://static.wikia.nocookie.net/yugioh/images/f/f8/Purrely-AMDE-EN-UR-1E.png/revision/latest?cb=20230129215001"
      },{
        name:"yummy",
        price: 20.5,
        booksImage: "https://static.wikia.nocookie.net/yugiohenespanol/images/9/90/Cupsy%E2%98%86yummy.jpg/revision/latest?cb=20250727094636&path-prefix=es"
      }];
      this.booksNextDebut =[{
        name:"sus",
        price: 10.5,
        bookImage: "https://static.wikia.nocookie.net/yugioh/images/f/f8/Purrely-AMDE-EN-UR-1E.png/revision/latest?cb=20230129215001"
      }]
    },2000); 
  }
  title = "Angular+net";
  booksAvailable!: any[];
  booksNextDebut!: any[];
}
