import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  public items = [
    {
      label: 'Pipes de Angular',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
        },
        {
          label: 'No comunes',
          icon: 'pi pi-globe',
        }
      ]
    },
    {
      label: 'Pipes Personalizados',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'Otro elemento',
          icon: 'pi pi-cog',
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
