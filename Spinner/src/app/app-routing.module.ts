import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandViewComponent } from './band-view/band-view.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component'
import { LikedpostsComponent } from './likedposts/likedposts.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'bands',
    component:BandViewComponent
  },
  {
    path:'edit-profile',
    component:EditUserComponent
  },

  {
    path:'likedposts',
    component:LikedpostsComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
