import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public url: string;
  public status!: string;
  public article!: Article;
  public user: any;
  public campo: string;
  public is_edit: boolean;
  public page_title: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: 50,
    uploadAPI: {
      url: Global.url + 'upload-image'

    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }

  };
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null!, null);
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
    this.url = Global.url;
    this.is_edit = true;
    this.page_title = 'Editar articulo';
    this.campo = ""
  }


  ngOnInit(): void {
    this.getArticle();
  }
  onSubmit() {
    alert("FOrmulario enviado");
    console.log(this.article);
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog/articulo', this.article._id]);
          console.log(response)
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );

  }
  imageUpload(data: any) {
    this.article.image = data.body.image;
  }

  getArticle() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          //Alerta de Seewt alert

          swal("Are you sure you want to do this?", {
            buttons: ["NIet NIet!", "PorsuPollo!"],
          });

          


          } else {
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
}
