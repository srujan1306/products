import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'products';
}
