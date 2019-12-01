import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

/*
 * Editing the routes and defining them in the order that they are to be displayed  --Ehab Feroze - 1601796*/
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
      },

      {
        path: 'sixth',
        loadChildren: '../softskills/softskills.module#SoftskillsPageModule'
      },

      {
        path: 'seventh',
        loadChildren: '../teamwork/teamwork.module#TeamworkPageModule'
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
