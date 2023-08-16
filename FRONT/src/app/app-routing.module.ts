import { ParameterFinderComponent } from './main/parameter-finder/parameter-finder.component';

import { HomeComponent } from './main/home/home.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './main/chat/chat.component';
import { CopyToolComponent } from './main/copy-tool/copy-tool.component';


const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:'replace',
        component:HomeComponent
      },
      {
        path:'params',
        component:ParameterFinderComponent
      },
      {
        path:'copy-tool',
        component:CopyToolComponent
      },
    ]
  },
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
