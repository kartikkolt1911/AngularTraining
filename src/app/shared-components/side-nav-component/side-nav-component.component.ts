import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-nav-component',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './side-nav-component.component.html',
  styleUrl: './side-nav-component.component.scss'
})
export class SideNavComponent {

}
