import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public url: string;
  public article!: Article;

  constructor(
  
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
       this._articleService.getArticle(id).subscribe(
         response => {
           if(response.article){
             this.article = response.article;
           }else{
             this._router.navigate(['/home']);
           }
           console.log(response);
         },
         error => {
           console.log(error);
           this._router.navigate(['/home']);
         }
       );
    });
   
  }
  delete(id:any){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    this._articleService.delete(id).subscribe(
      response =>{
        this._router.navigate(['/blog']);
        
      },
      error => {
        console.log(error);
      }
    )
  }

}
