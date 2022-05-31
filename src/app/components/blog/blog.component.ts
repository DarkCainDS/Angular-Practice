import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

public articles: Article[];
public url: string;

  constructor(
    private _articleService: ArticleService
  
  ) { 
    this.url = Global.url;
    this.articles = [];
  }

  ngOnInit(): void {
    console.log(this._articleService.pruebas());
    this._articleService.getArticles().subscribe(
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
