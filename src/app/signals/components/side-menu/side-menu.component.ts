import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'signals-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    {title: 'Counter', route: 'counter'},
    {title: 'User', route: 'user-info'},
    {title: 'Mutations', route: 'properties'},
  ]

}
