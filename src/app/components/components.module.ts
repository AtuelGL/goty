import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarrraHorizontalComponent } from './grafico-barrra-horizontal/grafico-barrra-horizontal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarrraHorizontalComponent],
  exports: [
    NavbarComponent,
    GraficoBarrraHorizontalComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
