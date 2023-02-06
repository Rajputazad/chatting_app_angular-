import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './chat/app/app.component';
import { App2Component } from './chat/app2/app2.component';

const routes: Routes = [{path:'',redirectTo:"chat",pathMatch:'full'},
{path:"chat",component:AppsComponent},
{path:"chat2",component:App2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
