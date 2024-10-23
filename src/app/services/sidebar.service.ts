import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu:any[]=[{
    titulo:'dashboard!!',
    icono:'mdi dmi-gauge',
    submenu:[
      {titulo:'main',url:'/'},
      {titulo:'progresbar',url:'progress'},
      {titulo:'grafica',url:'grafica'},
    ]
  }]
}
