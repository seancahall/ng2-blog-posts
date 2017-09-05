import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Post, GroupPosts } from "./post.interface";

@Component({
  selector: "posts",
  template: `
    <div class="list-group">
        <div *ngFor="let group of groupPosts" class="list-group-item">
            <h4>{{ group.category }}</h4>
            <ul>
                <li *ngFor="let post of group.posts">
                    {{ post.title }}
                </li>
            </ul>
        </div>
    </div>
    `
})
export class PostsComponent implements OnInit, OnChanges {
  @Input() data: Post[];

  groupPosts: GroupPosts[];

  // sufficient for a read-only blog listing
  ngOnInit() {
    this.groupPosts = this.groupByCategory(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {}

  groupByCategory(data: Post[]): GroupPosts[] {
    // group posts by category
    if (!data) return;

    // Set object pulls unique categories into an iterable collection
    const categories = new Set(data.map(x => x.category));

    // transform into list of posts by category
    const result = Array.from(categories).map(x => ({
      category: x,
      posts: data.filter(post => post.category === x)
    }));

    return result;
  }
}
