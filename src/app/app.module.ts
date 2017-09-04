import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { PostsComponent } from "./post.component";
import { BloggerComponent } from "./blogger.component";

@NgModule({
  declarations: [AppComponent, PostsComponent, BloggerComponent],
  imports: [BrowserModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
