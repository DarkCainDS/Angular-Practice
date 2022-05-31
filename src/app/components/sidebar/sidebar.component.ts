import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  public searchString!: string;

  constructor(
    private _route: Router,
    private _router: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }

  goSearch(){
    this._route.navigate(['/buscar', this.searchString]);
  }
}
