import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { BandPostComponent } from './band-post/band-post.component';
import { FormsModule } from '@angular/forms';
import { BandComponent } from './band/band.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JoinBandComponent } from './join-band/join-band.component';
import { PostItemComponent } from './post-item/post-item.component';
import { BandSnapshotComponent } from './band-snapshot/band-snapshot.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DailyQuestionComponent } from './daily-question/daily-question.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { ResponseItemComponent } from './response-item/response-item.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BandViewComponent } from './band-view/band-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditUserComponent } from './edit-user/edit-user.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserService } from './services/edit-user.service';
import { from } from 'rxjs';
import { LikedpostsComponent } from './likedposts/likedposts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchItemComponent,
    SearchComponent,
    RegisterComponent,
    BandPostComponent,
    BandComponent,
    JoinBandComponent,
    PostItemComponent,
    BandSnapshotComponent,
    DailyQuestionComponent,
    CommentBoxComponent,
    ResponseItemComponent,
    DashboardComponent,
    BandViewComponent,
    NavbarComponent,
    EditUserComponent,
    LikedpostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
