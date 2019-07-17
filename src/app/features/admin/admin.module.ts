import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from '../math/reducers';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'add-question',
        component: AddQuestionComponent
      }
    ]
  }
];


@NgModule({
  declarations: [AdminComponent, AddQuestionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
  ]
})
export class AdminModule { }
