import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../components/component.module';




@NgModule({
  declarations: [ 
    DashboardComponent,
    GraficaComponent,
    ProgressComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ComponentModule,
    FormsModule,
  ],
  exports:[
 
    DashboardComponent,
    GraficaComponent,
    ProgressComponent,
    PagesComponent
  ]
})
export class PagesModule { }
