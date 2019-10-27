import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: '../resume/resume.module#ResumePageModule'

      },
      {
        path: 'second',
        loadChildren: '../about/about.module#AboutPageModule'
      },

      {
        path: 'third',
        loadChildren: '../project/project.module#ProjectPageModule'
      },

      {
        path: 'fourth',
        loadChildren: '../excurr/excurr.module#ExcurrPageModule'
      },

      {
        path: 'fifth',
        loadChildren: '../contact/contact.module#ContactPageModule'
      }
    ]


  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
