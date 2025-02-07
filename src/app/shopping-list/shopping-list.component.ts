import { Component } from '@angular/core';
import { Ingredientt } from '../shared/ingredients.component';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
ingredients:Ingredientt[]=[
  new Ingredientt('Apple',5),
  new Ingredientt('Banana',4)
]
}
