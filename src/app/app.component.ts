import {Component} from '@angular/core';
import {COFFEE_ITEMS} from './coffee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coffeeItems = COFFEE_ITEMS;
}
