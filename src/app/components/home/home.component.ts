import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public articles!: Article[];

  constructor(
    private _articleService: ArticleService
  ) { 

    this.title = "Ultimos articulos";
  }

  ngOnInit(): void {
    console.log(this._articleService.pruebas());
    this._articleService.getArticles(true).subscribe(
      response => {
        if(response.articles){
          this.articles = response.articles;
        }else{
          
        }
        console.log(response);
      },
      error => {
        console.log(error)
      }
    );
  }
  

}
