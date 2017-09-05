import { Component, OnInit, Input } from "@angular/core";
import { Http } from "@angular/http";
import { Post } from "./post.interface";
import "rxjs/add/operator/map";

@Component({
  selector: "bloggers",
  template: `
    <h1>Posts by: {{ blogger }}</h1>
    <div *ngIf="posts">
        <posts [data]="posts"></posts>
    </div>
    `
})
export class BloggerComponent implements OnInit {
  blogger = "North Parker";
  posts: Post[];

  constructor(private _http: Http) {}

  ngOnInit() {
    this.getPostsByBlogger().subscribe(x => (this.posts = x));
  }

  getPostsByBlogger() {
    const url = "assets/mock-posts.json";
    return this._http.get(url).map(x => x.json());
  }
}
