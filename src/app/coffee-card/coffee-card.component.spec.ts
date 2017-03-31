import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuItem} from './../coffee';
import {CoffeeCardComponent, CoffeeCardModule} from './coffee-card.component';

describe('CoffeeCardComponent', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports: [CoffeeCardModule],
          declarations: [CoffeeCardTestComponent],
        })
        .compileComponents();
  }));

  it('should render', () => {
    const fixture = TestBed.createComponent(CoffeeCardTestComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});


/** Test components that renders a CoffeeCard. */
@Component({
  template: `<app-coffee-card
                 *ngFor="let item of coffeeItems"
                 [menuItem]="item"></app-coffee-card>`
})
class CoffeeCardTestComponent {
  item: MenuItem = {
    name: 'Erin\'s Favorite Latte',
    description: 'The most delicious latte in the world.',
    image: 'delicious_coffee.png',
  };
}
