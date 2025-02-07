import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes:Recipe[]=[new Recipe('First Recipe','I am giving you first recipe','https://imgs.search.brave.com/2ABUVhYXe4y0o19Vbny9Dir2UNFs_ZofZ-Suses-TnE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA1LzgzLzk0/LzM2MF9GXzEwNTgz/OTQ1OF9Eem5leEZy/WnVrRmZnc3g1Z0pB/b3VXREhOWkREWE5i/YS5qcGc')]
}
