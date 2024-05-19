import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  public menuItems = [
    {
      label: 'File',
      items: [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Open', icon: 'pi pi-fw pi-folder'},
        {label: 'Quit', icon: 'pi pi-fw pi-times'}
      ]
    },
    {
      label: 'Edit',
      items: [
        {label: 'Undo', icon: 'pi pi-fw pi-undo'},
        {label: 'Redo', icon: 'pi pi-fw pi-redo'}
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
