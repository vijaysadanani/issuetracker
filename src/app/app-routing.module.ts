import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditissueComponent } from './components/editissue/editissue.component';
import { HomeComponent } from './components/home/home.component';
import { IssueformComponent } from './components/issueform/issueform.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'issueForm', component: IssueformComponent},
  {path: 'editIssue', component: EditissueComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
